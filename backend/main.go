package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"

	"example/hosting-website/controllers"
	"example/hosting-website/db"
	"example/hosting-website/middlewares"

	"log"
	"os"
)

func main() {
	var err error

	// creating fiber app
	app := fiber.New()

	// loading .env file
	err = godotenv.Load("../.env")

	if err != nil {
		log.Fatal(err)
	}

	// initializing database instance
	err = db.InitializeDB(os.Getenv("DATABASE_DSN"))

	if err != nil {
		log.Fatal(err)
	}

	// using cors middleware
	app.Use(cors.New())

	// Initializer functions
	controllers.Init()

	//? ========= Routes =========
	// user routes
	app.Post("/api/signup", controllers.SignUp)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/validate", middlewares.RequireAuth, controllers.Validate)



	// running the server
	app.Listen(":" + os.Getenv("PORT"))
}
