QUESTION #1:
Which of the following functions are considered valid Activity Definitions
with the Go SDK (note: import statements have been omitted for the sake of
brevity)?


A1) CORRECT

```go
func CalculateProduct(ctx context.Context, num int) (int, error) {
	product := num * num
	return product, nil
}
```



A2) WRONG - Function does not return a value of type `Error`

```go
func CalculateProduct(num int) int {
	product := num * num
	return product
}
```



A3) CORRECT - Although we recommend making `context.Context` the first parameter to your Activity functions, you are not required to include it at all.

```go
func CalculateProduct(num int) (int, error) {
	product := num * num
	return product, nil
}
```



A4) WRONG - Not an exportable function due to the initial lowercase letter in the function name.

```go
func calculateProduct(num int) (int, error) {
	product := num * num
	return product, nil
}
```

===

QUESTION #2:
Which of the following represents a valid Workflow Definition using the Go SDK?


A1) WRONG - Does not take a `workflow.Context` as the first parameter

```go
package hello

import (
	"go.temporal.io/sdk/worker"
)

func GreetSomeone(name string) (string, error) {
	return "Hello " + name + "!", nil
}
```





A2) WRONG - does not return an `Error` type

```go
package hello

import (
	"go.temporal.io/sdk/worker"
)

func GreetSomeone(ctx workflow.Context, name string) string {
	return "Hello " + name + "!"
}
```


A3) WRONG - imports `Worker` package, rather than `Workflow` package

```go
package hello

import (
	"go.temporal.io/sdk/worker"
)

func GreetSomeone(ctx workflow.Context, name string) (string, error) {
	return "Hello " + name + "!", nil
}
```



A4) CORRECT - meets all three requirements described in the course:
1. Imports the `workflow` package from the SDK
2. Adds `workflow.Context` as the first input parameter
3. Includes an error type in the return value


```go
package hello

import (
	"go.temporal.io/sdk/workflow"
)

func GreetSomeone(ctx workflow.Context, name string) (string, error) {
	return "Hello " + name + "!", nil
}
```
