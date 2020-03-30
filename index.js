// Code your solution in this file!

let returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

let returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(timesFare) {
    return function(fare) {
        return timesFare * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectedFunction) {
    return selectedFunction(drivers)
}