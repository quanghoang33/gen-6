/**
 * @param {string} s
 * @return {number}
 */
 function caculateInside(chuoi) {
    let result = parseInt(chuoi[0]);
    let start = 1;
    while(start < chuoi.length) {
        
    }
}
// i'll solve this problem by simple list, not stack or queue
var calculate = function(s) {
    let arr = []
    let num = ''
    // first step: handle for make sure >10 number is push to list correctly: max O(n) space, O(n) time
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '+' || s[i] === '-' || s[i] === '(' || s[i] === ')') {
            if (num.length) {
                arr.push(num)
                num = ''
            }
            arr.push(s[i])
        }
        else if (s[i] === ' '){
            if(num.length) {
                arr.push(num)
                num = ''
            }
            
        }
        else if (!isNaN(s[i])) {
            num += s[i]
        }
    }
    if (num.length) {
        arr.push(num)
    }
    let noParenthensiesArr = []
    let outSideMath = 1
    let inSideMath = 1
    let i = 0
    while (i < arr.length){
       if (!isNaN(arr[i])) {
         console.log('---')
          console.log(arr[i])
          console.log(outSideMath)
          console.log(inSideMath)
           noParenthensiesArr.push(arr[i] * (outSideMath * inSideMath))
       }
       else if (arr[i] === '+' || arr[i] === '-') {
           if (arr[i+1] === '(') {
               outSideMath = arr[i] === '+' ? outSideMath : -outSideMath
               inSideMath = 1
           }
           else {
               inSideMath = arr[i] === '+' ? 1 : -1
           }
           i+=1
           continue
       }
       else if (arr[i] === ')') {
           outSideMath = outSideMath * outSideMath
           inSideMath = 1
       }
       else if (arr[i] === '(') {
           inSideMath = 1
       }
       i++
    }
    let result = 0
    for (let num of noParenthensiesArr){
        result += parseInt(num)
    }
    console.log(noParenthensiesArr)
    return result
};