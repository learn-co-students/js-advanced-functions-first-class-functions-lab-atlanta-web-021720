// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    let newArr = arr.slice(0, 2);
    return newArr;
}

const returnLastTwoDrivers = function(arr) {
    let newArr = arr.slice(-2);
    return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, func) {
    return func(arr);
}