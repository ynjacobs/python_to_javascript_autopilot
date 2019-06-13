function getNewCar () {
    return {
        city: 'Toronto',
        passengers: 0,
        gas: 100
    }
}

function addCar (cars, newCar) {
    cars.push(newCar);
    return `Adding new car to fleet. Fleet size is now ${cars.length}`;

}

function pickUpPassenger (car) {
    car.passengers++;
    car.gas -= 10;
    return `Picked up passenger. Car now has ${car.passengers} passengers.`;

}

function getDestination (car) {
    if (car.city == 'Toronto') {
        return 'Mississauga';
    }
    else if (car.city == 'Mississauga') {
      return 'London';  
    } 
    else if (car.city == 'London'){
      return 'Toronto';
    } 
}

function fillUpGas (car){
    const oldGas = car.gas;
    car.gas = 100;
    return `Filled up to ${getGasDisplay(car.gas)} on gas from ${getGasDisplay(oldGas)}.`

}

function getGasDisplay (gasAmount) {
    return `${gasAmount}%`
}

function drive(car, cityDistance){
    if (car.gas < cityDistance) {
        return fillUpGas(car);
    }

    car.city = getDestination(car);
    car.gas -= cityDistance;

    return `Drove to ${car.city}. Remaining gas: ${getGasDisplay(car.gas)}.`
}



function dropOffPassengers (car) {
   let previousPassengers = car.passengers;
   car.passengers = 0;
   return `Dropped off ${previousPassengers} passengers.`

}

function act(car) {
const distanceBetweenCities = 50;

if(car.gas < 20)  return fillUpGas(car);
else if(car.passengers < 3) return pickUpPassenger(car);
else {
    if(car.gas < distanceBetweenCities) return fillUpGas(car);
}

const droveTo = drive(car, distanceBetweenCities);
const passengersDropped = dropOffPassengers(car);

return `${droveTo} ${passengersDropped}`

}

function commandFleet (cars) {
    let i = 1;
    for (car in cars){
        let action = act(cars[car]);
        console.log(`Car ${i}: ${action}`);
        i++
        
    }
    console.log('---');
    
}

function addOneCarPerDay(cars, numDays) {
    for (i = 0; i < numDays; i++) {
        newCar = getNewCar();
        console.log(addCar(cars, newCar));
        commandFleet(cars);
        
    }
}



let cars = []
addOneCarPerDay(cars, 10)

