<template>
  <h2>Select your plan</h2>
  <p class="page-info">You have the option of monthly or yearly billing</p>
  <ul>
    <li v-for="(item, index) in content">
      <plan @click="getPlan" :data="item" :key="index" :toggle="toggle" />
    </li>
  </ul>
  <div class="panel-body">
    <div class="toggle">
      <h3>Monthly</h3>
      <label class="switch">
        <input type="checkbox" @click="toggleSwitch" />
        <div class="slider round"></div>
      </label>
      <h3>Yearly</h3>
    </div>
  </div>
</template>

<script setup>
import plan from "../components/plan.vue";
import { ref, watch } from "vue";

const content = ref([
  {
    icon: "../../public/images/icon-arcade.svg",
    title: "arcade",
    price: ["$9/mo", "$90/yr"],
  },
  {
    icon: "../../public/images/icon-advanced.svg",
    title: "advanced",
    price: ["$12/mo", "$120/yr"],
  },
  {
    icon: "../../public/images/icon-pro.svg",
    title: "pro",
    price: ["$15/mo", "$150/yr"],
  },
]);

const getPlan = function (e) {
  if (e.target.tagName !== "DIV") return;
  const selection = {
    plan: e.target.innerText.split("\n")[0],
    price: e.target.innerText.split("\n")[2],
  };
  localStorage.setItem("plan", JSON.stringify(selection));
};

const toggle = ref(true);
const toggleSwitch = function () {
  toggle.value = !toggle.value;
};

watch(
  () => toggle.value,
  (newVal) => {
    localStorage.setItem("year", newVal);
  },
  { immediate: true }
);
</script>

<style>
.toggle {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #101010;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
