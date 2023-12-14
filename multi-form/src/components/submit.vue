<template>
  <div class="button-container">
    <button>Go back</button>
    <button>Next step</button>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: var(--Marine-blue);
  color: white;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  font-size: 0.5rem;
  cursor: pointer;
}
</style>
