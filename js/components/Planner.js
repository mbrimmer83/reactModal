import React from "react";

import DailyStore from "../stores/DailyStore";

export default class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyPlanner: DailyStore.getDailyPlanner(),
    };
  }

  render() {
    const { dailyPlanner } = this.state;

    const DailyComponents = dailyPlanner.map(function(hour, index) {
      return (
          <tr>
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
