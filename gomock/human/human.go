package human

//go:generate mockgen -destination=./mock_human.go -package=main -source=./human.go
type Human interface {
	Say(str string) string
	Eat(food string) error
}
