let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
  }

  passengers() {
    return store.passengers.filter(passenger => {
      return passenger.driverId === this.id;
    })
  }
} //EOC

class Passenger {
  constructor(name, driver) {
    this.name = name;
    this.id = ++passengerId;

    if(driver) {
      this.driverId = driver.id;
    }
    store.passengers.push(this);
  }

  setDriver(driver){
    this.driverId = driver.id
  }
}

class trips {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id == ++tripId;
  }

  driver(){

  }

  passenger() {

  }

}
