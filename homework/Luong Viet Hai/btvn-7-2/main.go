package main

import (
	"fmt"
)

func main() {

	//grid := [][]byte{
	//	{'X', 'X', 'X', 'X', 'X', 'X'},
	//	{'X', '*', 'O', 'O', 'O', 'X'},
	//	{'X', 'O', 'O', '#', 'O', 'X'},
	//	{'X', 'X', 'X', 'X', 'X', 'X'},
	//}

	//grid := [][]byte{
	//	{'X', 'X', 'X', 'X', 'X'},
	//	{'X', '*', 'X', 'O', 'X'},
	//	{'X', 'O', 'X', '#', 'X'},
	//	{'X', 'X', 'X', 'X', 'X'},
	//}

	grid := [][]byte{
		{'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'},
		{'X', '*', 'O', 'X', 'O', '#', 'O', 'X'},
		{'X', 'O', 'O', 'X', 'O', 'O', 'X', 'X'},
		{'X', 'O', 'O', 'O', 'O', '#', 'O', 'X'},
		{'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'},
	}
	fmt.Println(getFood(grid))
}
