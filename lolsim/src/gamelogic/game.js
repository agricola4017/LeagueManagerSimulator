let time = {
    year: 0,
    week: 1,
    day: 1,
}

let freeAgencyStatus = 0
let regularSeasonStatus = 0
let playoffsStatus = 0 

export let currentStatus = "Free Agency";
export let currentTime = function() {
   return `Year: ${time.year} Week: ${time.week} Day: ${time.day}`
}
let eventHandler = []
export let game
export let timeAdvance = async function() {
    if (await validAdvance()) { 
        console.log(`past validAdvance, ${time.day}`)
        if (time.day < 7) {
            time.day++
        } else {
            time.day = 1
            time.week++
        }
        if (time.week === 1 && freeAgencyStatus === 0) {
            freeAgency()
            currentStatus = "Free Agency";
        } else if (freeAgencyStatus === 2 && regularSeasonStatus === 0) {
            regularSeason()
            currentStatus = "Regular Season";
        } else if (regularSeasonStatus === 2 && playoffsStatus === 0) {
            playoffs()
            currentStatus = "Playoffs"
        }
    }
}

const timeAdvanceCheck = 100
let it = 0
const lockout = 30
let validAdvance = async function() {
    if (eventHandler.length === 0) {
        console.log("proceed event q empty")
        return true
    } else {
        it++
        console.log("stuck", it)
        if (it === lockout) {
            it = 0
            return false
        }
        setTimeout(validAdvance, timeAdvanceCheck)
    }
}

let freeAgency = function() {

}

let regularSeason = function() {

}

let playoffs = function() {
    
}

let recursiveFunction = async function(funct, timeOut, parameters) {
    if (eventHandler.length === 0) {
        return 
    } else {
        return setTimeout(funct(...parameters), timeOut)
    }
}