package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	
	"example/hosting-website/db"
	
	"log"
	"os"
)

func main() {
	// creating fiber app
	app := fiber.New()

	// loading .env file
	errEnv := godotenv.Load("../.env")

	if errEnv != nil {
		log.Fatal(errEnv)
	}


	// initializing database instance
	err := db.InitializeDB(os.Getenv("DATABASE_DSN"))

	if err != nil {
		log.Fatal(err)
	}

	// using cors middleware
	app.Use(cors.New())

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{ "message": "Hi Bi" })
	})

	// running the server
	app.Listen(":8000")
}