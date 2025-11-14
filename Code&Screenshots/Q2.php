<?php
function insideOut($arr) {
    if (count($arr) % 2 !==0) {
        return $arr; 
    }

    $n = count($arr);
    $result = $arr;
    $result[0] = $arr[$n-1];
    $result[$n-1] = $arr[0];
    $result[1] = $arr[$n-2];
    $result[$n-2] = $arr[1];

    return $result;
}

print_r(insideOut([1, 2, 2, 1]));
print_r(insideOut(["Everyone", "says", "Kelly", "is", "REALLY", "awesome"])); 
?>
