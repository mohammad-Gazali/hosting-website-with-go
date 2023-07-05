package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB


func ConnectDB(dsn string) (*gorm.DB, error) {


	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		return nil, err
	}

	return db, nil
}

func InitializeDB(dsn string) error {
    var err error
    DB, err = ConnectDB(dsn)

    if err != nil {
        return err
    }

    return nil
}