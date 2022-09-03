/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 function isAllTrue(arr) {
  return arr.every(item => item === true)
}
var canVisitAllRooms = function(rooms) {
let checkList = new Array(rooms.length).fill(false) 
checkList[0] = true
let stack = [0]
while(stack.length > 0) {
    let currentRoom = stack.pop()
    for (let key of rooms[currentRoom]) {
        if(!checkList[key]) {
            checkList[key] = true
            stack.push(key)
        }
    }
}
return isAllTrue(checkList)
};