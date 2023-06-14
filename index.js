const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);
function returnFirstTwoDrivers(drivers) {
     return drivers.slice(0,2);
}
function returnLastTwoDrivers(driver) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(anInteger){
    return function(fare){
      return fare*anInteger;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
    return driversToReturn(arrayOfDrivers);
};
