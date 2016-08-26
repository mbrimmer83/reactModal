import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Planner from "./Planner";
import PlannerModal from "./Modal"

import DailyStore from "../stores/DailyStore";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Matthew"
    };
  }

  render() {
    return (
      <div>
        <Header />
          <table style={{display: 'inline-block'}}>
            <Planner />
          </table>
          <table className="modalTable">
            <PlannerModal/>
          </table>
        <Footer />
        <div>

        </div>
      </div>
    );
  }
}
