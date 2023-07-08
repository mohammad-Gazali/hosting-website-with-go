package models

import (
	"encoding/json"
	"log"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID       uint   `gorm:"primaryKey"`
	Name     string
	Email    string `gorm:"unique;not null;default:null"`
	Password string
}

func (user User) ToJson() string {
	data := map[string]interface{}{
		"id": user.ID,
		"name": user.Name,
		"email": user.Email,
	}

	jsonData, err := json.Marshal(data)

	if err != nil {
		log.Fatal("Json Parsing Error")
	}

	return string(jsonData)
}