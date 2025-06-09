// service_test.go
package service

import (
	"errors"
	"ks_study_mock/db"
	"testing"

	"github.com/golang/mock/gomock"
)

func TestService_Increment(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockDB := db.NewMockDatabase(ctrl)
	svc := NewService(mockDB)

	// 测试用例1: 正常情况
	t.Run("success", func(t *testing.T) {
		mockDB.EXPECT().Get("count").Return(5, nil)
		mockDB.EXPECT().Set("count", 6).Return(nil)

		result, err := svc.Increment("count")
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}
		if result != 6 {
			t.Errorf("expected 6, got %d", result)
		}
	})

	// 测试用例2: Get失败
	t.Run("get error", func(t *testing.T) {
		mockDB.EXPECT().Get("error").Return(0, errors.New("db error"))

		_, err := svc.Increment("error")
		if err == nil {
			t.Error("expected error, got nil")
		}
	})

	// 测试用例3: Set失败
	t.Run("set error", func(t *testing.T) {
		mockDB.EXPECT().Get("count").Return(5, nil)
		mockDB.EXPECT().Set("count", 6).Return(errors.New("db error"))

		_, err := svc.Increment("count")
		if err == nil {
			t.Error("expected error, got nil")
		}
	})
}
