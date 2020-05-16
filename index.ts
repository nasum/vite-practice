import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import App from "./components/App.vue";

const history = createWebHistory();
const routes = [
  {
    path: "/todo",
    component: App
  }
];
const router = createRouter({ routes, history });
const app = createApp(Layout);
app.use(router);
app.mount("#app");
