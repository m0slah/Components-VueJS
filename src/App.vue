<template>
  <h1>Hey!</h1>
  <Greeting></Greeting>
</template>

<script>
import Greeting from "@/Components/Greeting.vue";

export default {
  name: "App",
  components: {
    Greeting: Greeting,
  },
};
</script>
