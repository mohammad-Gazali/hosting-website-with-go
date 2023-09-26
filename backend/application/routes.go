package application

import (
	"example/hosting-website/controllers"
	"example/hosting-website/middlewares"

	"github.com/gofiber/fiber/v2"
)



func SetupRoutes(app *fiber.App) {
	// auth routes
	app.Post("/api/signup", controllers.SignUp)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/user", middlewares.RequireAuth, controllers.User)
	app.Get("/api/logout", controllers.Logout)

	// send email
	app.Post("/api/send-email", middlewares.RequireAuth, controllers.SendEmail)
}