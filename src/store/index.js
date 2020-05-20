import { createStore } from "redux";
import reducer from "../store/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(reducer, enhancer);
export default store;
