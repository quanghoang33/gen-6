/**
 * https://leetcode.com/problems/course-schedule/
 * 
 * @param {*} numCourses 
 * @param {*} prerequisites 
 */
var canFinish = function(numCourses, prerequisites) {
    var courseDict = [];

    for (var relation in prerequisites) {
        courseDict[relation[1]] = [];
        courseDict[relation[1]].push(relation[0]);
    }

    var checked = [];
    var path = [];
    for (var currCourse = 0; currCourse < numCourses; currCourse++) {
        if (isCyclic(currCourse, courseDict, checked, path)) {
            return false;
        }
    }

    return true;
};

var isCyclic = function(currCourse, courseDict, checked, path) {

    if (checked[currCourse]) {
        return false;
    }

    if (path[currCourse]) {
        return true;
    }

    path[currCourse] = true;

    var result = false;
    for (var child in courseDict[currCourse]) {
        result = isCyclic(child, courseDict, checked, path);
        if (result) {
            break;
        }
    }

    path[currCourse] = false;
    checked[currCourse] = true;
    return result;
};
