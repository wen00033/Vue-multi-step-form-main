<template>
  <h2>Pick add-ons</h2>
  <p class="page-info">Add-ons help enhance your gaming experience.</p>
  <form  @submit.prevent="(e)=>console.log(e.target) ">
      <div class="option" v-for="(item, index) in content">
        <addon :data="item" :key="index" />
      </div>
  </form>
</template>

<script setup>
import addon from "../components/addon.vue";
import { ref } from "vue";
const content = ref([
  {
    addons: "online service",
    text: "access multiplayer games",
    price: ["$1/mo", "$10/yr"],
  },
  {
    addons: "Large storage",
    text: "Extra 1TB of cloud save ",
    price: ["$2/mo", "$20/yr"],
  },
  {
    addons: "Customizable profile",
    text: "Custom theme on your profile",
    price: ["$2/mo", "$20/yr"],
  },
]);

</script>
