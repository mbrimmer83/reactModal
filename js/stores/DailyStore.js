import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class DailyStore extends EventEmitter {
  constructor() {
    super()
    this.dailyPlanner = [
      {id: 9, time: '9 am', name: 'Enter your name', number: 'Enter your number'},
      {id: 10, time: '10 am', name: 'Enter your name', number: 'Enter your number'},
      {id: 11, time: '11 am', name: 'Enter your name', number: 'Enter your number'},
      {id: 12, time: '12 pm', name: 'Enter your name', number: 'Enter your number'},
      {id: 1, time: '1 pm', name: 'Enter your name', number: 'Enter your number'},
      {id: 2, time: '2 pm', name: 'Enter your name', number: 'Enter your number'},
      {id: 3, time: '3 pm', name: 'Enter your name', number: 'Enter your number'},
      {id: 4, time: '4 pm', name: 'Enter your name', number: 'Enter your number'},
      {id: 5, time: '5 pm', name: 'Enter your name', number: 'Enter your number'}
    ];
  }
  // addDailyEvent()
  getDailyPlanner() {
    return this.dailyPlanner;
  }

  updateDailyPlanner(data) {
    this.dailyPlanner = data;
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "UPDATE_STORE": {
        this.updateDailyPlanner(action.data);
        break;
      }
    }
  }

}

const dailyStore = new DailyStore;

dispatcher.register(dailyStore.handleActions.bind(dailyStore));

export default dailyStore;
