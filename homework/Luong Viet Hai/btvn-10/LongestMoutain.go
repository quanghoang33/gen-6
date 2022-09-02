package main

import "fmt"

func LongestMountain(arr []int) int {
	isDown := false
	point2 := 0
	point1 := 0
	max := 0

	if len(arr) < 3 {
		return 0
	}

	for {
		fmt.Println(point2)

		if point2 > len(arr) {
			break
		}

		if point2 == len(arr)-1 {
			if isDown == false {
				return max
			} else {
				max = Max(max, point2-point1+1)
				return max
			}
		}

		if point2 < len(arr)-1 && arr[point2+1] < arr[point2] && isDown == false {
			if point2 == point1 {
				point2++
				point1++
				continue
			} else {
				point2++
				isDown = true
				continue
			}
		}

		if point2 < len(arr)-1 && arr[point2+1] > arr[point2] && isDown == false {
			point2++
			continue
		}

		if point2 < len(arr)-1 && arr[point2+1] < arr[point2] && isDown == true {
			point2++
			continue
		}

		if point2 < len(arr)-1 && arr[point2+1] >= arr[point2] && isDown == true {
			max = Max(max, point2-point1+1)
			point1 = point2
			isDown = false
			continue
		}

		if point2 < len(arr)-1 && arr[point2+1] == arr[point2] && isDown == false {
			point2++
			point1 = point2
			continue
		}
	}
	return max
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}
