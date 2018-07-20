import HelloWorld from "./HelloWorld";
import connect from "../../connect";

const mappedState = {
  msg: "hello from mappedState"
};

const mappedAction = {
  submit() {
    /* eslint-disable no-console */
    console.log("hello from mappedAction");
  }
};

export default connect(
  mappedState,
  mappedAction
)(HelloWorld);
