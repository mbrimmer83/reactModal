import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Planner from "./Planner";
import PlannerModal from "./Modal"
import ModalButtons from "./ModalButtons";
import DailyStore from "../stores/DailyStore";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Matthew",
      dailyPlanner: DailyStore.getDailyPlanner(),
      showModal: false
    };
  }
  close(e){
    console.log(e);
    this.setState({showModal: false});
    console.log(this.state.showModal);
  }
  open(e){
    console.log(e);
    this.setState({showModal: true});
    console.log(this.state.showModal);
  }
  render() {
    return (
      <div>
        <Header />
          <table style={{display: 'inline-block'}}>
            <Planner />
          </table>
          <table style={{float: 'left'}}>
            <ModalButtons openModal={this.open.bind(this)}/>
          </table>
        <Footer />
        <div>
        <PlannerModal  open={this.open.bind(this)} state={this.state.showModal}/>
        </div>
      </div>
    );
  }
}
