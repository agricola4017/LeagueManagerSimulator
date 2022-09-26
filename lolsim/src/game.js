document.onload(()=> {
    console.log("abc")
})

let save = function() {

}

let load = function() {

}

let time = {
    year: 0,
    week: 1,
    day: 0,
}

let freeAgencyStatus = 0
let regularSeasonStatus = 0
let playoffsStatus = 0 

let eventHandler = []

let timeAdvance = async function() {
    if (await validAdvance()) { 
        if (time.day < 7) {
            time.day++
        } else {
            time.day = 0
            time.week++
        }
        if (time.week == 1 && freeAgencyStatus == 0) {
            freeAgency()
        } else if (freeAgencyStatus == 2 && regularSeasonStatus == 0) {
            regularSeason()
        } else if (regularSeasonStatus == 2 && playoffsStatus == 0) {
            playoffs()
        }
    }
}

let timeAdvanceCheck = 10
let validAdvance = async function() {
    if (eventHandler.length == 0) {
        return
    } else {
        return setTimeout(validAdvance(), timeAdvanceCheck)
    }
}

let freeAgency = function() {

}

let recursiveFunction = async function(funct, timeOut, parameters) {
    if (eventHandler.length == 0) {
        return 
    } else {
        return setTimeout(funct(...parameters), timeOut)
    }
}