import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Info from "./routes/info.vue";
import year from "./routes/year.vue";
import addon from "./routes/addon.vue";
import finish from "./routes/finish.vue";
import final from "./routes/final.vue";

const routes = [
  { path: "/", component: Info },
  { path: "/year", component: year },
  { path: "/addon", component: addon },
  { path: "/finish", component: finish },
  { path: "/final", component: final },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
