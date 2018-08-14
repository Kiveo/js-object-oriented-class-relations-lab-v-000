let store = {drivers: [], passengers: []};
let driverId = 0;
let passengerId = 0;

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
