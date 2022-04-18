import { createRouter, createWebHistory } from "vue-router";
import CreateActivityView from "../views/CreateActivityView.vue";
import ActivitiesView from "../views/ActivitiesView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CreateActivityView,
    },
    {
      path: "/activities",
      name: "activities",
      component: ActivitiesView,
    },
  ],
});

export default router;
