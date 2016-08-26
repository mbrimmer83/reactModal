import React from "react";

import ReactDOM from "react-dom";

import DailyStore from "../stores/DailyStore";
import {Button} from "react-bootstrap";
import {Modal,ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter} from "react-modal-bootstrap";
import * as PlannerActions from "../actions/PlannerActions";

export default class App extends React.Component {
  state = {
    isOpen: false,
    dailyPlanner: DailyStore.getDailyPlanner(),
    index: 0
  };
  openModal = () => {
    this.setState({
      isOpen: true
    });
  };
  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };
  handleClick(e) {
    this.openModal();
    this.setState({index: e});
  }
  handleClick2(e) {
    this.hideModal();
  }
  handleInputChange1(e) {
    var dailyP = this.state.dailyPlanner;
    dailyP[this.state.index].name = e.target.value;
    this.setState({dailPlanner: dailyP});
  }
  handleInputChange2(e) {
    var dailyP = this.state.dailyPlanner;
    dailyP[this.state.index].number = e.target.value;
    this.setState({dailPlanner: dailyP});
  }
  handleSaveClick() {
    PlannerActions.plannerModal(this.dailyPlanner);
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
      <tbody>
      {DailyComponentsButtons}
      <div className='layout-page'>
        <main className='layout-main'>
          <div className='container'>


            <Modal isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
              <ModalHeader>
                <ModalClose onClick={this.hideModal}/>
                <ModalTitle>Time: {dailyPlanner[this.state.index].time}</ModalTitle>
              </ModalHeader>
              <ModalBody>
              <form>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" value={dailyPlanner[this.state.index].name} onChange={this.handleInputChange1.bind(this)}/><br />
                <label htmlFor="number">Number</label><br />
                <input type="text" id="number" value={dailyPlanner[this.state.index].number} onChange={this.handleInputChange2.bind(this)}/>
              </form>
             </ModalBody>
             <ModalFooter>
               <button className='btn btn-default' onClick={this.hideModal}>
                 Close
               </button>
               <button className='btn btn-primary' onClick={this.handleSaveClick.bind(this)}>
                 Save changes
               </button>
             </ModalFooter>
           </Modal>
         </div>
       </main>
     </div>
     </tbody>
   );
 }
}
