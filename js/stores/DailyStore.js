import { EventEmitter } from "events";

// import dispatcher from "../dispatcher";

class DailyStore extends EventEmitter {
  constructor() {
    super()
    this.dailyPlanner = [
      {id: 9, time: '9 am', name: 'Enter name', number: 'Enter number'},
      {id: 10, time: '10 am', name: 'Enter name', number: 'Enter number'},
      {id: 11, time: '11 am', name: 'Enter name', number: 'Enter number'},
      {id: 12, time: '12 pm', name: 'Enter name', number: 'Enter number'},
      {id: 1, time: '1 pm', name: 'Enter name', number: 'Enter number'},
      {id: 2, time: '2 pm', name: 'Enter name', number: 'Enter number'},
      {id: 3, time: '3 pm', name: 'Enter name', number: 'Enter number'},
      {id: 4, time: '4 pm', name: 'Enter name', number: 'Enter number'},
      {id: 5, time: '5 pm', name: 'Enter name', number: 'Enter number'}
    ];
  }
  // addDailyEvent()
  getDailyPlanner() {
    return this.dailyPlanner;
  }
}

const dailyStore = new DailyStore;

export default dailyStore;
