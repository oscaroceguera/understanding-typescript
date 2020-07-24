function carIsTruck(car) {
    return 'load' in car;
}
function scanCar(car) {
    if (carIsTruck(car)) {
        // Only truck properties will be suggested
        console.log("Truck has a load of " + car.load);
    }
    else {
        // Only F1 properties will be suggested
        console.log("F1 has acceleration of " + car.acceleration);
    }
}
scanCar({
    model: 'toyota',
    load: 100
});
scanCar({
    model: 'toyota',
    acceleration: 500
});
