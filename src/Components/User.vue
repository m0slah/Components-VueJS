<template>
  <div>
    <button type="button" @click="onClickAge">Update Age</button>
    <button type="button" @click="AgeChangeFunction(3)">Update Age CB</button>

    <p>The User is {{ age }} years old</p>
    <p>{{ AgeDoubled }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      validator(value) {
        return value < 130;
      },
    },
    AgeChangeFunction: Function,
  },
  emits: ["age-change"],
  computed: {
    AgeDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
