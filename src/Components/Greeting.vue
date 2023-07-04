<template>
  <h1 v-if="age >= 25">{{ message }}</h1>
  <p v-else>You must be 25 years old or older to view this message</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: darken($color: #cc4444, $amount: 15%);
}
</style>
