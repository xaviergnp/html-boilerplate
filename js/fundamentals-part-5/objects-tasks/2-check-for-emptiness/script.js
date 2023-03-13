"use strict";
function isEmpty(obj) {
    let empty = true;
    for(let key in obj) empty = false;
    return empty;
}

let schedule = {};
schedule["8:30"] = "get up";
alert(isEmpty(schedule));