import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class DailyStore extends EventEmitter {
  constructor() {
    super()
    this.dailyPlanner = [
      {time: '9 am', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '10 am', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '11 am', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '12 pm', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '1 pm', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '2 pm', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '3 pm', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '4 pm', name: 'Appointment available', number: 'Appointment available', taken: false},
      {time: '5 pm', name: 'Appointment available', number: 'Appointment available', taken: false}
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
