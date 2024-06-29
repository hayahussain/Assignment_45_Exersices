// QUESTION 45
function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const car = createCar('Toyota', 'Camry', ['color', 'blue'], ['sunroof', true]);
console.log(car);
export {};
