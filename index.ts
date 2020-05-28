import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import Home from "./components/Home.vue";
import Users from "./components/Users.vue";
import ToDo from "./components/ToDo.vue";
import Group from "./components/Group.vue";
import ToDoAnalytics from "./components/ToDoAnalytics.vue";
import store from "./stores/index";

const history = createWebHistory();
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/users",
    component: Users
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
app.use(store);
app.mount("#app");
