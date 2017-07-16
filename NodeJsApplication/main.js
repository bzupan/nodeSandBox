
var dataStore = require("./dataStore")

var properties = require("./dataStore").properties

exports.mainStatus = "ok"
global.aaa = "aaa"

//console.log("main properties = ", properties)

dataStore.properties = {aaa: "bb"}
dataStore.print()


setTimeout(function () {
    dataStore.print()
}, 1000);

// aaaa

//dataStore.properties = {aaa: "aa"}
//
//console.log("main properties = ", properties)
//console.log("dataStore.properties = ", dataStore.properties)
//
//dataStore.imageAdd()
//
//dataStore.print()
//dataStore.irImage = []
//dataStore.print()
////dataStore.startLoop()
//
//
//setTimeout(function () {
//    dataStore.stopLoop()
//    console.log(exports.mainStatus)
//    dataStore.printAll()
//}, 10000);

//dataStore.properties = {aaa:"bb"}
//dataStore.print()
//dataStore.properties = {aaa:"cc"}
//dataStore.print()



dataStore.printAll()




