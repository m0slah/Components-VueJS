<template>
  <h1>Hey!</h1>
  <Greeting :age="age" @age-change="age++"></Greeting>
  <User :age="age" @age-change="UpdateAge" :AgeChangeFunction="UpdateAgeCB"></User>
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
      age: 20,
    };
  },
  methods: {
    UpdateAge(num) {
      this.age += num;
    },
    UpdateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
