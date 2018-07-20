<template>
  <div>
    <h1>単体コンテナ生成デモ</h1>
    <HelloWorldContainer/>
    <h1>複数コンテナ生成デモ</h1>
    <HelloWorldContainers/>
  </div>
</template>

<script>
import HelloWorldContainer from "./components/HelloWorldContainer";
import HelloWorldContainers from "./components/HelloWorldContainers";

export default {
  name: "app",
  components: {
    HelloWorldContainer,
    HelloWorldContainers
  }
};
</script>
