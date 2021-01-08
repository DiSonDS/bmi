<template>
  <div id="container">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseContainer",
};
</script>

<style scoped>
#container {
  margin: 2rem 1rem 2rem 1rem;
}
</style>