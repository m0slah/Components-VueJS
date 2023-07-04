<template>
  <div>

    <p>The User is {{ age }} years old</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
};
</script>
