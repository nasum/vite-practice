import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import Home from "./components/Home.vue";
import ToDo from "./components/ToDo.vue";
import Group from "./components/Group.vue";
import ToDoAnalytics from "./components/ToDoAnalytics.vue";

const history = createWebHistory();
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/todos",
    component: ToDo
  },
  {
    path: "/groups",
    component: Group
  },
  {
    path: "/analytics",
    component: ToDoAnalytics
  }
];
const router = createRouter({ routes, history });
const app = createApp(Layout);
app.use(router);
app.mount("#app");
