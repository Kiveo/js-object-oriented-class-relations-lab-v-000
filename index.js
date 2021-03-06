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
    return store.trips.filter(trip => trip.driverId === this.id);
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
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

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;

    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(driver => driver.id === this.driverId);
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId);
  }

}
