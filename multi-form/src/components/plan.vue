<template>
  <div class="icon-section">
    <img class="icon" :src="data.icon" alt="images" />
    <div class="icon-section-content">
      <h3 class="title">{{ data.title }}</h3>
      <p>{{ toggle ? data.price[0] : data.price[1] }}</p>
      <h4 v-if="toggle == false">2 months free</h4>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
defineProps({
  data: {
    type: Object,
    required: true,
  },
  toggle: {
    type: Boolean,
    required: true,
  },
});
</script>
<style>
.icon {
  aspect-ratio: 1;
  width: 3rem;
  margin: 0.3rem;
}

.title::first-letter {
  text-transform: uppercase;
}

.icon-section {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgb(209, 209, 209);
}
.icon-section:hover {
  border: 1px solid hsl(243, 100%, 62%);
}

.icon-section-content {
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
