<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>

<style scoped lang="scss">
h1:hover {
  color: darken($color: #cc4444, $amount: 15%);
}
</style>
