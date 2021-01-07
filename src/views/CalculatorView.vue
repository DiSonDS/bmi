<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Калькулятор ИМТ</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Калькулятор ИМТ</ion-title>
        </ion-toolbar>
      </ion-header>
      <Calculator />
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
import Calculator from "@/components/Calculator.vue";

export default {
  name: "Calculator View",
  components: {
    Calculator,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>