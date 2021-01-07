<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="CalculatorView" href="/">
          <ion-icon :icon="calculator" />
          <ion-label>Калькулятор</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="AboutView" href="/about">
          <ion-icon :icon="help" />
          <ion-label>О нас</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { calculator, help } from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      calculator,
      help,
    };
  },
};
</script>