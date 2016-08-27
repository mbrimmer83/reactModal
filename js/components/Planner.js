import React from "react";

import DailyStore from "../stores/DailyStore";
import * as PlannerActions from "../actions/PlannerActions";

export default class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      dailyPlanner: DailyStore.getDailyPlanner(),
    };
  }

  componentWillMount() {
    console.log("This happened!");
    DailyStore.on("change", this.updateState);
  }

  componentWillUnmount() {
    console.log("umounted");
    DailyStore.off("change", this.updateState);
  }

  updateState() {
    this.setState.dailyPlanner = DailyStore.getDailyPlanner();
    this.forceUpdate();
    console.log("This happened!");
    console.log(this.state.dailyPlanner);
  }

  render() {
    const { dailyPlanner } = this.state;

    const DailyComponents = dailyPlanner.map(function(hour, index) {
      return (
          <tr className={dailyPlanner.taken}>
            <td key={index}>{hour.time}</td>
            <td>{hour.name}</td>
            <td>{hour.number}</td>
          </tr>
      );
    });
    return (
        <tbody>{DailyComponents}</tbody>
    );
  }
};
