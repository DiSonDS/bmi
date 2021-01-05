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
  /* text-align: center; */
  margin: 2rem;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>