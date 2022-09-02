<?php


class LongestMoutain
{
    public function findNumber(array $arr)
    {
        $isDownSight = false;
        $max = 0;
        $point1 = 0;
        $point2 = 0;

        if (count($arr) < 3)  {
            return $max;
        }

        do {
            if (!isset($arr[$point2 + 1])) {;
                if ($isDownSight == false) {
                    return $max;
                }
                // break loop when point 2 is out of range
                $max = max($max, $point2 - $point1 + 1);
                break;
            }

            // not is mountain
            // wrong
            if ($arr[$point2 + 1] < $arr[$point2] and $isDownSight == false) {
                if ($point1 == $point2) {
                    $point1 ++;
                    $point2 ++;
                    continue;
                } else {
                    $point2 ++;
                    $isDownSight = true;
                    continue;
                }
            }

            // is mountain, and still upsight
            if ($arr[$point2 + 1] > $arr[$point2] and $isDownSight == false) {
                $point2 ++;
                continue;
            }

            if ($arr[$point2 + 1] < $arr[$point2] and $isDownSight == true) {
                $point2 ++;
                continue;
            }

            if ($arr[$point2 + 1] >= $arr[$point2] and $isDownSight == true) {
                $max = max($max, $point2 - $point1 + 1);
                $point1 = $point2;
                $isDownSight = false;
                continue;
            }

            if ($arr[$point2 + 1] == $arr[$point2] and $isDownSight == false) {
                $point2 ++;
                $point1 = $point2;
                continue;
            }
        }
        while ($point2 <= count($arr));

        // because we go from the left => right, and the  1 ,2, 3, 2, 1, 2 ,3 , 4 , 5 , 6 , 1
        if ($max < 3) {
            return 0;
        }
        return $max;
    }
}

$test = new LongestMoutain();


var_dump($test->findNumber([0,1,2,3,4,5,4,3,2,1,0]));
var_dump($test->findNumber([0,1,2,3,4,5,6,7,8,9]));