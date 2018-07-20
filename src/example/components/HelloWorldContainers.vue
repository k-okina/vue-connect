<template>
  <div>
    <container1/>
    <hr>
    <container2/>
    <hr>
    <container3/>
    <hr>
    <container4/>
  </div>
</template>


<script>
import Vue from "vue";
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

Vue.component("HelloWorld", HelloWorld);

export default {
  components: {
    container1: connect(
      mappedState,
      mappedAction
    )(HelloWorld, "container1"),
    container2: connect(
      mappedState,
      mappedAction
    )(HelloWorld, "container2"),
    container3: connect(
      mappedState,
      mappedAction,
      { msg: "後出し上書きです" }
    )(Vue.extend(HelloWorld), "container3"),
    container4: connect(
      mappedState,
      mappedAction
    )("HelloWorld", "container4")
  }
};
</script>
