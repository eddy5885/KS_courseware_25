// human_test.go
package human

import (
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"
)

func TestHuman_Say(t *testing.T) {
	// 创建gomock控制器
	ctrl := gomock.NewController(t)
	defer ctrl.Finish() // Go 1.14+可以省略

	// 创建Human接口的mock实现
	mockHuman := NewMockHuman(ctrl)

	// 设置预期行为：当调用Say("hello")时返回"world"
	mockHuman.EXPECT().Say("hello").Return("world2121212")

	mockHuman.EXPECT().Say("min").Return("2").Times(2) // 必须调用2次

	// 调用被测试的代码
	result := mockHuman.Say("hello")
	fmt.Println("Result from Say:", result)
	// 验证结果
	if result != "world2121212" {
		t.Errorf("Expected 'world', got '%s'", result)
	} else {
		fmt.Println("Test passed for Say with 'hello'")
	}

	result2 := mockHuman.Say("min")
	result2 = mockHuman.Say("min")

	fmt.Println("result2 from Say:", result2)
	if result2 != "world2121212" {
		t.Errorf("Expected '2', got '%s'", result2)
	}
}
