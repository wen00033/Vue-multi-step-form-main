<template>
  <div class="option">
    <input class="checkbox" type="checkbox" />
    <div>
      <h4 class="title">{{ data.data.addons }}</h4>
      <p>{{ data.data.text }}</p>
    </div>
    <h3 class="price">{{ year ? data.data.price[0] : data.data.price[1] }}</h3>
  </div>

  {{ console.log(data.data) }}
</template>

<script setup>
import { defineProps } from "vue";
const year = JSON.parse(localStorage.getItem("year"));
console.log(year);
const data = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<style>
.checkbox {
  aspect-ratio: 1;
  width: 1rem;
  justify-self: center;
  align-self: center;
}

.option {
  transition: all 0.3s ease-in-out;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 0.5rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 0.5rem;
}

.option:hover {
  border: 1px solid hsl(243, 100%, 62%);
}

.price {
  justify-self: center;
  align-self: center;
  color: hsl(243, 100%, 62%);
  font-weight: 400;
  font-size: 1rem;
}

.price::before {
  content: "+";
}
</style>
