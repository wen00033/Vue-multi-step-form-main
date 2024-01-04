<template>
  <h2>Finishing up</h2>
  <p class="page-info">
    Finishing up Double-check everything looks OK before confirming.
  </p>
  <div class="priceList">
    <div class="list">
      <h4>{{ data.plan.plan }}</h4>
      <h4>{{ data.plan.price }}</h4>
    </div>
    <hr>
    <div class="list" v-for="(item, index) in data.option" :key="index">
      <p>{{ item.addons }}</p>
      <span>+{{ item.price }}</span>
    </div>
  </div>
  <div class="list">
    <p>Total</p>
    <p>{{ total }}</p>
  </div>
</template>
<script setup>
import { ref , computed } from "vue";
const getLocalStorage = (name) => {
  const check = localStorage.getItem(name);
  if(check) {
    return JSON.parse(check);
};
}

const content = ref({
  plan:getLocalStorage('plan') ,option1: getLocalStorage("online service"), option2: getLocalStorage("Large storage"), option3: getLocalStorage("Customizable profile")}
)

const year = JSON.parse(localStorage.getItem("year"));
console.log(year)


const data = computed(()=> {
  return {
    plan: content.value.plan,
    option: [ content?.value?.option1,content?.value?.option2,content?.value?.option3].filter((item)=> item !== undefined),
  }
})

console.log(data.value)
const total = computed(()=> {
  let total = 0;
  total += parseInt(data.value.plan.price.slice(1));
  data.value.option.forEach((item)=> {
    if(item) {
      total += parseInt(item.price.slice(1));
    }
  })
  return `$${total}/ ${year ?'mo' :'yr'}`
})




</script>

<style >
.list {
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list p{ 
  font-size: .8rem;
}


.priceList{
  background-color: rgb(233, 224, 224);
  padding: .5rem;
  border-radius: 1rem;
}

</style>