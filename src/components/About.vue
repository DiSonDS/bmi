<template>
  <BaseContainer>
    <h1>Что Где Когда 📝</h1>
    <div class="about-text">
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
    <ion-item-divider />
    <div class="developer-link">
      👨‍💻 Разработчик:
      <a href="https://disonds.com" target="_blank" rel="author noopener"
        >DiSonDS</a
      >
    </div>
  </BaseContainer>
</template>

<script lang="ts">
import { IonItemDivider } from "@ionic/vue";
import BaseContainer from "@/components/base/BaseContainer.vue";

export default {
  name: "About",
  components: {
    IonItemDivider,
    BaseContainer
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.about-text {
  margin-bottom: 0.5rem;
}
.developer-link {
  margin-top: 1rem;
  text-align: center;
}
</style>