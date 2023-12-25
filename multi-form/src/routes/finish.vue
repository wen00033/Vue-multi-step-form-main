<template>
  <h2>Personal info</h2>
  <p class="page-info">
    Finishing up Double-check everything looks OK before confirming.
  </p>
  <table>
    <tr>
      <td>name</td>
    </tr>
    <tr>
      <td>email</td>
    </tr>
  </table>
</template>
<script setup>
async function submit() {
  const data = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    plan: JSON.parse(localStorage.getItem("plan")),
    year: JSON.parse(localStorage.getItem("year")),
  };
  const response = await fetch("http://localhost:3000/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
}
</script>
