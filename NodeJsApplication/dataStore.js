var main = require("./main")
exports.properties = {
    aa: 1,
    bb: 2, cc: 3
}

exports.irImage = [20, 20, 20, 20, 20, 20]
var i = 1

exports.imageAdd = function () {
    if (loop) {
        exports.irImage.push(i++)
        console.log("exports.irImage", exports.irImage)
        exports.startLoop()
    } else {
    }
}

// function deleteObject (obj) {
var obj = function () {}

obj = null;

delete obj;




var loop = true

exports.print = function () {
    console.log("exports.properties", exports.properties)
    console.log("exports.irImage", exports.irImage)
    console.log("main.mainStatus", main.mainStatus)
}

exports.stopLoop = function () {
    loop = false
    main.mainStatus = "NOK"
}

exports.startLoop = function () {
    setTimeout(exports.imageAdd, 1000);
}


function timeout(fnc, sec) {
    setTimeout(fnc, sec * 1000);
}

var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())

exports.printAll = function () {
    console.log("exports", exports)
    console.log("this", this)
    console.log("main", main)
    console.log("global", global)
    console.log("  global.aaa", GLOBAL.aaa)



}
