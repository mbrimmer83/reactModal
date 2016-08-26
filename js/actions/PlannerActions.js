import dispatcher from "../dispather";

export function plannerModal() {
  dispatcher.dispatch({
    type: "OPEN_MODAL"
  });
}
