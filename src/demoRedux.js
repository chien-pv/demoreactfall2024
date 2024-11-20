console.log("demo redux");
import { createStore } from "redux";
const initState = [
  { title: "Hoc JS Redux", id: 1 },
  { title: "Hoc CSS", id: 2 },
  { title: "Hoc HTML", id: 3 },
  { title: "Hoc React", id: 4 },
];

const store = createStore(reducer);

function reducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { title: action.payload, id: 2 }];
    case "DELETE":
      return [];
    default:
      return state;
  }
}

// console.log(store.getState());
// let action = {
//   type: "DELETE",
// };
// store.dispatch(action);
// console.log(store.getState());

export default store;
