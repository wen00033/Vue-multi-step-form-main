<template>
  <div class="button-container">
    <button v-if="event.currentStep > 1" @click="prevStep">Go back</button>
    <div v-else></div>
    <button @click="nextStep">Next step</button>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from "vue";
import { useRouter } from "vue-router";
import db from "../utils/db";
import { collection, addDoc } from "firebase/firestore";

const router = useRouter();
const event = reactive({
  currentStep: 1,
  totalSteps: 5,
});
const emits = defineEmits(["nextStep", "prevStep"]);
const person = localStorage.getItem("person");
const plan = localStorage.getItem("plan");

// const updatedDoc = function () {
//   const document = collection(db, "plan");
//   if (person && !Object.values(JSON.parse(person)).includes("")) {
//     const data = JSON.parse(person);
//     addDoc(document, data);
//   }
// };

function nextStep() {
  if (event.currentStep == event.totalSteps) return;
  event.currentStep++;
  navigator();
  emits("nextStep", event.currentStep);
}
function prevStep() {
  if (event.currentStep == 1) return;
  event.currentStep--;
  navigator();
  emits("prevStep", event.currentStep);
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
