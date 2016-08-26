import React from "react";

import DailyStore from "../stores/DailyStore";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";


export default class ModalButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      dailyPlanner: DailyStore.getDailyPlanner()
    };
  }
  handleClick(e) {
    this.props.openModal(e);
  }
  handleClick2(e) {
    this.props.closeModal(e);
  }
  render() {
    const { dailyPlanner } = this.state;

    const DailyComponentsButtons = dailyPlanner.map(function(hour, index) {
      var boundClick = this.handleClick.bind(this, index);
      return (
          <tr>
            <td><Button onClick={boundClick} key={index} ref={'hour', + index}>Add/Edit</Button></td>
          </tr>
      );
    }, this);
    return (
      <tbody>{DailyComponentsButtons}</tbody>

    )
  }
}
