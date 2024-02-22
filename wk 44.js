function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add optional features to the car object
    for (const option of options) {
        const [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    }

    return car;
}

// Example calls
const car1 = createCar("Toyota", "Camry", "color: Blue", "sunroof: Yes");
const car2 = createCar("Honda", "Civic", "color: Red");
const car3 = createCar("Ford", "Mustang", "color: Yellow", "convertible: Yes", "spoiler: Sport");

console.log(car1);
console.log(car2);
console.log(car3);
