<template>
  <div class="wrapper">
    <div>
      <step :update="currentStep" />
    </div>
    <div class="split-content">
      <main class="content">
        <router-view />
      </main>
      <footer>
        <submit @prevStep="check" @nextStep="check2" />
      </footer>
    </div>
  </div>
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

@media screen and (min-width: 1400px) {
  footer {
    position: static;
  }

  .content {
    position: static;
    transform: translate(0, 0);
  }

  #app {
    padding: 1rem;
    border-radius: 0.4rem;
    box-shadow: 1px 2px 3px rgba(128, 128, 128, 0.47);
    display: flex;
    flex-direction: row;
    background: white;
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .split-content {
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
  }
}
</style>
