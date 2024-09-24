import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "@/views/index.vue";
import ArticlePage from "@/views/articles/[id].vue";
import AuthorsPage from "@/views/authors/index.vue";
import AuthorPage from "@/views/authors/[id].vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/articles/:id",
    name: "article",
    component: ArticlePage,
  },
  {
    path: "/authors",
    name: "authors",
    component: AuthorsPage,
  },
  {
    path: "/authors/:id",
    name: "author",
    component: AuthorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
