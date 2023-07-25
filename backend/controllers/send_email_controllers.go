package controllers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"net/smtp"
	"os"

	"github.com/gofiber/fiber/v2"
)

type EmailData struct {
	Subject string
	Name    string
	Email   string
	Message string
}

func SendEmail(c *fiber.Ctx) error {
	// Get: subject and message
	body := struct {
		Subject string `json:"subject" validate:"required"`
		Message string `json:"message" validate:"required"`
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

	// Get: the name and email of the user
	var user map[string]interface{}

	userHeader := c.GetRespHeader("user")

	if err := json.Unmarshal([]byte(userHeader), &user); err != nil {

		return fiber.ErrInternalServerError
	}

	// Do: send the email

	// getting html template
	tmpl, err := template.ParseFiles("templates/email_template.html")

	if err != nil {

		return fiber.ErrInternalServerError
	}

	emailData := EmailData{
		Subject: body.Subject,
		Message: body.Message,
		Name:    user["name"].(string),
		Email:   user["email"].(string),
	}

	buf := &bytes.Buffer{}

	err = tmpl.Execute(buf, emailData)

	if err != nil {
		return fiber.ErrInternalServerError
	}

	smtpHost := os.Getenv("EMAIL_HOST")
	smtpPort := os.Getenv("EMAIL_PORT")
	smtpUsername := os.Getenv("EMAIL_HOST_USERNAME")
	smtpEmailPassword := os.Getenv("EMAIL_HOST_PASSWORD")

	senderEmail := user["email"].(string)
	receiverEmail := os.Getenv("SUPPORT_EMAIL")

	msg := makeMessage(receiverEmail, senderEmail, body.Subject, buf.String())

	// SMTP authentication.
	auth := smtp.PlainAuth("", smtpUsername, smtpEmailPassword, smtpHost)

	if err := smtp.SendMail(smtpHost+":"+smtpPort, auth, senderEmail, []string{receiverEmail}, []byte(msg)); err != nil {

		return fiber.ErrInternalServerError
	}

	return c.SendStatus(fiber.StatusOK)
}



// utils
func makeMessage(to, from, subject, body string) string {
	headers := make(map[string]string)
	message := ""

	headers["To"] = to
	headers["From"] = from
	headers["Subject"] = subject
	headers["Content-Type"] = "text/html; charset=\"utf-8\""

	for key, value := range headers {
        message += fmt.Sprintf("%s: %s\r\n", key, value)
    }
    message += "\r\n" + body

	return message
}