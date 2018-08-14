let store = {drivers: [], passengers: []};
let driver.id = 0;
let passenger.id = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driver.id;
    trips.drivers.push(this);
  }
  //
  // trips() {
  //   return trip.drivers.filter(driver => {
  //     return driver.id === this.id;
  //   })
  // }
  //
  // passengers() {
  //   return trip.passengers.filter(passenger => {
  //     return passenger.driverId === this.id;
  //   })
  // }

} //EOC

class Passenger {

  constructor(name) {
    this.name = name;
    this.id = ++passenger.id;

    if(user) {
      this.driverId = driver.id;
    }

  }

  setDriver(driver){
    this.driverId = driver.id
  }

}
