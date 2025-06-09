// service.go
package service

import "ks_study_mock/db"

type Service struct {
	db db.Database
}

func NewService(db db.Database) *Service {
	return &Service{db: db}
}

func (s *Service) Increment(key string) (int, error) {
	val, err := s.db.Get(key)
	if err != nil {
		return 0, err
	}

	newVal := val + 1
	if err := s.db.Set(key, newVal); err != nil {
		return 0, err
	}

	return newVal, nil
}
