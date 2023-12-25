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
import { ref } from "vue";
import db from "./utils/db";
import { collection, addDoc } from "firebase/firestore";
// Add a new document with a generated id.
// const docRef = await addDoc(collection(db, "plan"));
// console.log("Document written with ID: ", docRef.id);

const currentStep = ref(1);

function check(payload) {
  currentStep.value = payload;
}

function check2(payload) {
  currentStep.value = payload;
}

function check3(payload) {
  console.log(payload);
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
