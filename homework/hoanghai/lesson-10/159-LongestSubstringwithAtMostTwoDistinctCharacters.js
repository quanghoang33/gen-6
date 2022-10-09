/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstringTwoDistinct = function(s) {
    let hashTable = {}
    let index = 0
    let max = 0
    while(index < s.length) {
        if(hashTable[s[index]]) {
            hashTable[s[index]] += 1
        } else {
            hashTable[s[index]] = 1
        }
        let dlength = Object.keys(hashTable).length
        if (dlength <= 2) {
            max += 1
        }
        else {
            hashTable[s[index-max]] -= 1
        }
        if(hashTable[s[index-max]] == 0) {
            delete hashTable[s[index-max]]
        }
        index++
    }
    return max
};
// "ccaabbb"
//"eceba"