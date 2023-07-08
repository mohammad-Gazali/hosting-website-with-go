package controllers

import "github.com/go-playground/validator/v10"

var customValidator *validator.Validate


func Init() {
	customValidator = validator.New()
}