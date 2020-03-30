// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers) {
   return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length - 2,drivers.length)
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function (multiplyer) {
    return function (num) {
       return num * multiplyer; 
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(drivers, someFunc){
    return someFunc(drivers)
}




