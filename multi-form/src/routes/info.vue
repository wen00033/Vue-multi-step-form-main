<template>
  <h2>Personal info</h2>
  <p class="page-info">
    Please provide your name, email address, and phone number.
  </p>
  <form>
    <label for="name">Name</label>
    <input
      type="text"
      v-model="person.name"
      id="name"
      placeholder="e.g. Stephen King"
    />
    <label for="email">Email Address</label>
    <input
      type="email"
      v-model="person.email"
      id="email"
      placeholder="e.g. stephenking@lorem.com"
    />
    <label for="phone">Phone Number</label>
    <input
      v-model="person.phone"
      type="tel"
      id="phone"
      placeholder="234 567 890"
    />
  </form>
</template>
<script setup>
import { ref, watch } from "vue";
const person = ref({
  name: "",
  email: "",
  phone: "",
});

watch(
  person,
  (newVal) => {
    localStorage.setItem("person", JSON.stringify(newVal));
  },
  { deep: true, immediate: true }
);
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
input {
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-block: 0.3rem;
}
</style>
