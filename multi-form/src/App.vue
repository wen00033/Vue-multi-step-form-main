<template>
  <div class="wrapper">
    <step />
    <main class="content">
      <router-view />
    </main>
  </div>
  <footer>
    <submit />
  </footer>
</template>

<script>
import step from "./components/step.vue";
import submit from "./components/Submit.vue";
export default {
  components: {
    step,
    submit,
  },
};
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
</style>
