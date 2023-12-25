<template>
  <header>
    <img
      class="background"
      src="../../public/images/bg-sidebar-mobile.svg"
      alt="mobile"
    />
    <ul class="progress-container">
      <li class="step"><h4>1</h4></li>
      <li class="step"><h4>2</h4></li>
      <li class="step"><h4>3</h4></li>
      <li class="step"><h4>4</h4></li>
    </ul>
  </header>
</template>
<script setup>
import { defineProps, onMounted, watch } from "vue";

const props = defineProps({
  update: {
    type: Number,
    required: true,
  },
});

onMounted(() => {
  nextStep();
});

const nextStep = function () {
  const step = document.querySelectorAll(".step");
  step.forEach((item, index) => {
    if (index == props.update - 1) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

watch(
  () => props.update,
  () => {
    nextStep();
  }
);
</script>

<style lang="scss">
img {
  width: 100%;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

header {
  position: relative;
  display: grid;
}

.background {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.progress-container {
  @extend .center;
  padding-bottom: 3rem;
  color: white;
  display: flex;
  gap: 1rem;
}
.progress-container li {
  cursor: pointer;
  position: relative;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 50%;
}

.active {
  background-color: #ccc;
  color: black;
}

.progress-container h4 {
  @extend .center;
}
</style>
