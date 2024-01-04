<template>
    <input class="checkbox" type="checkbox" @click="handleCheck(data.data.addons)" :checked="checked"/>
    <div>
      <h4 class="title">{{ data.data.addons }}</h4>
      <p>{{ data.data.text }}</p>
    </div>
    <h3 class="price">{{ year ? data.data.price[0] : data.data.price[1] }}</h3>

</template>

<script setup>
import { defineProps, computed, ref } from "vue";
const year = JSON.parse(localStorage.getItem("year"));
const checked = ref(false);
const data = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const checkedValue = computed(
  ()=> {
   return {
    addons: data.data.addons,
    price: year ? data.data.price[0] : data.data.price[1],
    text: data.data.text,
    checked: false,
   } 
  }
)
const handleCheck = (setName) => {
  checked.value = !checked.value;
  checkedValue.value.checked = checked.value;
  if( checked.value ) {
    localStorage.setItem(`${setName}`, JSON.stringify(checkedValue.value));
  } else {
    localStorage.removeItem(`${setName}`);
  }
};





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
