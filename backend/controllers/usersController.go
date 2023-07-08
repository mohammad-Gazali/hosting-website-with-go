package controllers

import (
	"encoding/json"
	"example/hosting-website/db"
	"example/hosting-website/models"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"

	"net/http"
	"os"
	"time"
)

func SignUp(c *fiber.Ctx) error {
	// Get: email & name & password & password_confirm
	body := struct {
		Email           string `json:"email" validate:"required"`
		Name            string `json:"name"`
		Password        string `json:"password" validate:"required"`
		PasswordConfirm string `json:"password_confirm" validate:"required"`
	}{}

	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid payload",
		})
	}

	// for validating the request body
	if err := customValidator.Struct(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid payload",
		})
	}

	// Check: password == password_confirm, Else Do Error
	if body.Password != body.PasswordConfirm {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Password and password confirm must has the same value",
		})
	}

	// Do: Hash the password
	hash, errHash := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if errHash != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Faild to hash the password",
		})
	}

	// Create: new User
	user := models.User{
		Name:     body.Name,
		Email:    body.Email,
		Password: string(hash),
	}

	result := db.DB.Create(&user)

	if result.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": result.Error.Error(),
		})
	}

	// Do: Success Response
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "User created successfully",
	})
}


func Login(c *fiber.Ctx) error {
	// Get: email & name & password & password_confirm
	body := struct {
		Email string `json:"email" validate:"required"`
		Password string `json:"password" validate:"required"`
	}{}

	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid payload",
		})
	}

	if err := customValidator.Struct(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid payload",
		})
	}


	// Do: Get the requested user by email
	var user models.User	

	db.DB.First(&user, "email = ?", body.Email)

	// checking if the user is not found
	if user.ID == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid credentials",
		})
	}


	// Check: hash(requestd_user_password) == hash(the_request_password)
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password)); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid credentials",
		})
	}


	// Do: generate jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	// sign and get the complete encoded token as a string using the secret
	tokenString, tokenErr := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if tokenErr != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Faild to create token",
		})
	}


	// Do: Send jwt by cookie
	c.Cookie(&fiber.Cookie{
		SameSite: string(rune(http.SameSiteLaxMode)),
		Name: "Authorization",
		Value: tokenString,
		MaxAge: 3600 * 24 * 30,
		Path: "",
		Domain: "",
		Secure: true,
		HTTPOnly: true,
	})


	// Do: success
	return c.SendStatus(fiber.StatusOK)
}


func Validate(c *fiber.Ctx) error {
	var user map[string]interface{}
	
	userHeader := c.GetRespHeader("user")

	if err := json.Unmarshal([]byte(userHeader), &user); err != nil {
		return fiber.ErrInternalServerError
	}

	return c.JSON(fiber.Map{
		"user": user,
	})
}