let trip = {drivers: [], passengers: []};
let driverId = 0;
let passengerId = 0;

class Driver {

  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    trips.drivers.push(this);
  }

  trips() {
    return trip.drivers.filter(driver => {
      return driver.id === this.id;
    })
  }

  passengers() {
    return trip.passengers.filter(passenger => {
      return passenger.driverId === this.id;
    })
  }

} //EOC

class Passenger {

  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    if(user) {
      this.driverId = driver.id;
    }

  }

  setDriver(driver){
    this.driverId = driver.id
  }

}
