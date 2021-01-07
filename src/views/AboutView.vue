<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>О нас</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">О нас</ion-title>
        </ion-toolbar>
      </ion-header>
      <About />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import About from "@/components/About.vue";

export default {
  name: "About View",
  components: {
    About,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>