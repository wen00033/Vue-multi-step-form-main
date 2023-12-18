<template>
  <div class="button-container">
    <button @click="prevStep">Go back</button>
    <button @click="nextStep">Next step</button>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const event = reactive({
  currentStep: 1,
  totalSteps: 5,
});

const emits = defineEmits(["nextStep", "prevStep"]);

function nextStep() {
  if (event.currentStep == event.totalSteps) return;
  event.currentStep++;
  emits("nextStep", event.currentStep);
  navigator();
}
function prevStep() {
  if (event.currentStep == 1) return;
  emits("prevStep", event.currentStep);
  event.currentStep--;
  navigator();
}
function navigator() {
  if (event.currentStep == 1) {
    router.push("/");
  }
  if (event.currentStep == 2) {
    router.push("/year");
  }
  if (event.currentStep == 3) {
    router.push("/addon");
  }
  if (event.currentStep == 4) {
    router.push("/finish");
  }
  if (event.currentStep == 5) {
    router.push("/final");
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: var(--Marine-blue);
  color: white;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  font-size: 0.5rem;
  cursor: pointer;
}
</style>
