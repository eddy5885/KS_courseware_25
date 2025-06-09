// db.go
package db

type Database interface {
	Get(key string) (int, error)
	Set(key string, value int) error
	Delete(key string) error
}
