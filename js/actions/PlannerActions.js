import dispatcher from "../dispatcher";

export function plannerModal(data) {
  dispatcher.dispatch({
    type: "UPDATE_STORE",
    data: data
  });
}
