<template>
  <div class="wrapper">
    <step :update="currentStep" />
    <main class="content">
      <router-view />
    </main>
  </div>
  <footer>
    <submit @prevStep="check" @nextStep="check2" />
  </footer>
</template>

<script setup>
import step from "./components/step.vue";
import submit from "./components/submit.vue";
import { defineProps, ref } from "vue";

const currentStep = ref(1);

function check(payload) {
  currentStep.value = payload - 1;
  console.log(currentStep.value);
}

function check2(payload) {
  currentStep.value = payload - 1;
  console.log(currentStep.value);
}
</script>
<style lang="scss">
.content {
  background-color: white;
  width: 90%;
  padding: 1.5rem;
  border-radius: 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: white;
  padding: 0.5rem;
}
</style>
