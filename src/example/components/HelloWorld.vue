<template>
  <div>
    <div>{{ msg }}</div>
    <div @click="submit">click me</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    submit: Function
  }
};
</script>
