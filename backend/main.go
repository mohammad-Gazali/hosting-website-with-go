package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"

	"example/hosting-website/controllers"
	"example/hosting-website/db"

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
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,  //| this option is neccessary to send the cookie to the frontend, and make frontend able to send it back
        AllowOrigins: os.Getenv("FRONTEND_LOCAL_HOST"),
		AllowHeaders: "Origin,Content-Type,Accept,Content-Length,Accept-Language,Accept-Encoding,Connection,Access-Control-Allow-Origin",
	}))

	// using logger middleware for logging HTTP requests/responses details
	app.Use(logger.New())

	
	// Initializer functions
	controllers.Init()


	// Setup App Routes
	SetupRoutes(app)	


	// running the server
	app.Listen(":" + os.Getenv("PORT"))
}
