<template>
  <h1>Hey!</h1>
  <Greeting></Greeting>
  <User :age="age"></User>
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
  data() {
    return {
      age: 22,
    }
  }
};
</script>
