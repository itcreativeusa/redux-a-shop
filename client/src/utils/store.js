// store is passed to the Provider component as a prop.
import { createStore } from "redux";
// import reducer:
import reducer from "./reducers";
// create store:
export default createStore(reducer);
