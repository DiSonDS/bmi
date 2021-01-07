<template>
  <BaseContainer>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Рассчитать Индекс Массы Тела 🔢</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <div class="bmi-result" v-if="bmi">
          <ion-label><strong>Ваш индекс массы тела: </strong></ion-label>
          <ion-label color="primary"><strong>{{ bmi }} кг/м²</strong></ion-label>
          <p>
            <ion-label color="primary">{{ bmiText }}</ion-label>
          </p>
        </div>
        <form @ionChange="onFormChange()">
          <ion-item>
            <ion-label position="floating">Рост в см</ion-label>
            <!-- Number type input -->
            <ion-input
              type="number"
              required
              min="0"
              :value="height"
              @input="height = $event.target.value"
            ></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Вес в кг</ion-label>
            <!-- Number type input -->
            <ion-input
              type="number"
              required
              min="0"
              :value="weight"
              @input="weight = $event.target.value"
            ></ion-input>
          </ion-item>
        </form>
      </ion-card-content>
    </ion-card>

    <div class="bmi-table">
      <ion-grid>
        <ion-row>
          <ion-col> <b>Индекс массы тела</b> </ion-col>
          <ion-col>
            <b>Соответствие между массой человека и его ростом</b>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> 16 и менее </ion-col>
          <ion-col> Выраженный дефицит массы тела </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> 16 — 18,5 </ion-col>
          <ion-col> Недостаточная (дефицит) масса тела </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> 18,5 — 25 </ion-col>
          <ion-col> Норма </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> 25 — 30</ion-col>
          <ion-col> Избыточная масса тела (предожирение) </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> 30 — 35 </ion-col>
          <ion-col> Ожирение </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> 35 — 40 </ion-col>
          <ion-col> Ожирение резкое </ion-col>
        </ion-row>
        <ion-row>
          <ion-col> 40 и более </ion-col>
          <ion-col> Очень резкое ожирение </ion-col>
        </ion-row>
      </ion-grid>
    </div>
    <div class="bmi-info">
      <a
        href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%BC%D0%B0%D1%81%D1%81%D1%8B_%D1%82%D0%B5%D0%BB%D0%B0"
        target="_blank"
        rel="noopener"
        >И́ндекс ма́ссы те́ла (англ. body mass index (BMI), ИМТ)</a
      >
      — величина, позволяющая оценить степень соответствия массы человека и его
      роста и тем самым косвенно судить о том, является ли масса недостаточной,
      нормальной или избыточной. Важен при определении показаний для
      необходимости лечения.
    </div>
    <div class="bmi-formula">
      <p>
        ИМТ рассчитывается по формуле: <strong>I = m / h²</strong>,<br />
        где:<br />
        <b>m</b> — масса тела в килограммах<br />
        <b>h</b> — рост в метрах, и измеряется в кг/м².
      </p>
    </div>
  </BaseContainer>
</template>

<script lang="ts">
import BaseContainer from "@/components/base/BaseContainer.vue";
import { ref } from "vue";

export default {
  name: "Calculator",
  setup() {
    const height = ref();
    const weight = ref();
    const bmi = ref();
    const bmiText = ref("");

    function onFormChange() {
      bmi.value = (weight.value / height.value ** 2) * 10000;
      if (bmi.value <= 16) {
        bmiText.value = "Выраженный дефицит массы тела";
      } else if (bmi.value < 18.5) {
        bmiText.value = "Недостаточная (дефицит) масса тела";
      } else if (bmi.value < 25) {
        bmiText.value = "Норма";
      } else if (bmi.value < 30) {
        bmiText.value = "Избыточная масса тела (предожирение)";
      } else if (bmi.value < 35) {
        bmiText.value = "Ожирение";
      } else if (bmi.value < 40) {
        bmiText.value = "Ожирение резкое";
      } else if (bmi.value >= 40) {
        bmiText.value = "Очень резкое ожирение";
      } else {
        bmiText.value = "";
      }
    }
    return { height, weight, bmi, bmiText, onFormChange };
  },
  components: {
    BaseContainer,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.bmi-table,
.bmi-info,
.bmi-formula {
  margin-top: 1.5rem;
}
.bmi-result {
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>