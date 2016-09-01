import React from "react";

import DailyStore from "../stores/DailyStore";
import * as PlannerActions from "../actions/PlannerActions";
import classNames from "classnames/bind";

export default class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = {
      dailyPlanner: DailyStore.getDailyPlanner(),
    };
  }

  componentWillMount() {
    DailyStore.on("change", this.updateState);
  }

  // componentWillUnmount() {
  //   DailyStore.off("change", this.updateState);
  // }

  updateState() {
    this.setState({dailyPlanner: DailyStore.getDailyPlanner()});
  }

  render() {
    const { dailyPlanner } = this.state;

    const DailyComponents = dailyPlanner.map(function(hour, index) {
      var tableClass = classNames({
        'tableRowTaken': dailyPlanner[index].taken
      });
      return (
          <tr className={tableClass}>
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
