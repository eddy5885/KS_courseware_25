// Code generated by MockGen. DO NOT EDIT.
// Source: human.go

// Package main is a generated GoMock package.
package human

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// MockHuman is a mock of Human interface.
type MockHuman struct {
	ctrl     *gomock.Controller
	recorder *MockHumanMockRecorder
}

// MockHumanMockRecorder is the mock recorder for MockHuman.
type MockHumanMockRecorder struct {
	mock *MockHuman
}

// NewMockHuman creates a new mock instance.
func NewMockHuman(ctrl *gomock.Controller) *MockHuman {
	mock := &MockHuman{ctrl: ctrl}
	mock.recorder = &MockHumanMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockHuman) EXPECT() *MockHumanMockRecorder {
	return m.recorder
}

// Eat mocks base method.
func (m *MockHuman) Eat(food string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Eat", food)
	ret0, _ := ret[0].(error)
	return ret0
}

// Eat indicates an expected call of Eat.
func (mr *MockHumanMockRecorder) Eat(food interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Eat", reflect.TypeOf((*MockHuman)(nil).Eat), food)
}

// Say mocks base method.
func (m *MockHuman) Say(str string) string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Say", str)
	ret0, _ := ret[0].(string)
	return ret0
}

// Say indicates an expected call of Say.
func (mr *MockHumanMockRecorder) Say(str interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Say", reflect.TypeOf((*MockHuman)(nil).Say), str)
}
