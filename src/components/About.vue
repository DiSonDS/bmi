<template>
  <BaseContainer>
    <h1>Что Где Когда 📝</h1>
    <div class="about-text ion-margin-top ion-margin-bottom">
      Как-то вечером захотелось попробовать
      <a href="https://ionicframework.com/">Ionic Framework</a>, собственно
      результат Вы сейчас сами и наблюдаете
    </div>
    <div class="github-link">
      🔨 GitHub:
      <a href="https://github.com/DiSonDS/bmi" target="_blank" rel="noopener"
        >исходный код</a
      >
    </div>
    <div class="developer-link ion-margin-top">
      👨‍💻 Разработчик:
      <a href="https://disonds.com" target="_blank" rel="author noopener"
        >DiSonDS</a
      >
    </div>
  </BaseContainer>
</template>

<script lang="ts">
import BaseContainer from "@/components/base/BaseContainer.vue";

export default {
  name: "About",
  components: {
    BaseContainer
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>