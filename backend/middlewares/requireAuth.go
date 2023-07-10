package middlewares

import (
	"example/hosting-website/db"
	"example/hosting-website/models"
	
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	
	"fmt"
	"os"
	"time"
)


func RequireAuth(c *fiber.Ctx) error {
	// Get: Cookie
	tokenString := c.Cookies("Authorization", "Non")

	if tokenString == "Non" {
		return c.SendStatus(fiber.StatusUnauthorized)
	}


	// Do: Decode the token
	token, decodeErr := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header)
		}
		
		return []byte(os.Getenv("JWT_SECRET")), nil
	})

	if decodeErr != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		// Check: exp time
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			return c.SendStatus(fiber.StatusUnauthorized)
		}

		// Do: Find user with "sub" in the jwt token payload
		var user models.User
		db.DB.First(&user, "id = ?", claims["sub"])

		if user.ID == 0 {
			return c.SendStatus(fiber.StatusBadRequest)
		}

		// Do: Attach to req
		c.Set("user", user.ToJson())


		// Do: Continue
		return c.Next()
	}

	return c.SendStatus(fiber.StatusUnauthorized)
}