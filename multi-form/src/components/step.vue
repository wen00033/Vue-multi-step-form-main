<template>
  <header>
    <picture>
      <source
        media="(min-width:1400px)"
        srcset="../../public/images/bg-sidebar-desktop.svg"
      />
      <img
        class="background"
        src="../../public/images/bg-sidebar-mobile.svg"
        alt="mobile"
      />
    </picture>

    <ul class="progress-container">
      <li class="step">
        <h4>1</h4>
        <div class="step-content">
          <span>step 1</span>
          <h5>Your Info</h5>
        </div>
      </li>
      <li class="step">
        <h4>2</h4>
        <div class="step-content">
          <span>step 2</span>
          <h5>Select plan</h5>
        </div>
      </li>
      <li class="step">
        <h4>3</h4>
        <div class="step-content">
          <span>step 3</span>
          <h5>add-ons</h5>
        </div>
      </li>
      <li class="step">
        <h4>4</h4>
        <div class="step-content">
          <span>step 4</span>
          <h5>summary</h5>
        </div>
      </li>
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
  height: 100%;
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

.step-content {
  display: none;
}

@media screen and (min-width: 1400px) {
  .progress-container {
    gap: 1rem;
    flex-direction: column;
    justify-self: flex-start;
    left: 20%;
    top: 35%;
  }
  .step-content {
    display: block;
    position: absolute;
    left: 140%;
    top: -10%;
  }

  .step-content > * {
    white-space: nowrap;
    text-transform: uppercase;
  }
}
</style>
