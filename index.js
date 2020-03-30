 const returnFirstTwoDrivers = function(drivers) {
    return  drivers.slice(0, 2)
 }

 const returnLastTwoDrivers = function(drivers) {
    return  drivers.slice(-2)
 }

 const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];
     

const createFareMultiplier = function(mulitply) {
    return function(value) {
        return mulitply * value;
    };
}; 

const fareDoubler = function(createFareMultiplier) {
return createFareMultiplier * 2;
};

const fareTripler = function(createFareMultiplier) {
 return createFareMultiplier * 3;
};

const selectDifferentDrivers = function(drivers, pick) {
        return pick(drivers)
};