<template>
  <h1>Hey!</h1>
  <Greeting></Greeting>
  <User></User>
</template>

<script>
import Greeting from "@/Components/Greeting.vue";
import User from "@/Components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
};
</script>
