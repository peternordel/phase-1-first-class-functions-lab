function returnFirstTwoDrivers(drivers) {
    return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers (drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return function fareMultiplier (baseFare) {
        return baseFare * multiplier;
    }
}

function fareDoubler (baseFare) {
    return createFareMultiplier(2)(baseFare);
}

function fareTripler (baseFare) {
    return createFareMultiplier(3)(baseFare);
}

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers);
}
