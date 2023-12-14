<template>
  <h2>Personal info</h2>
  <p class="page-info">
    Please provide your name, email address, and phone number.
  </p>
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="e.g. Stephen King" />
    <label for="email">Email Address</label>
    <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" />
    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" placeholder="234 567 890" />
  </form>
  <submit />
</template>

<style scoped>
.page-info {
  font-size: 0.8rem;
  color: gray;
  margin-block: 1rem;
}

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
