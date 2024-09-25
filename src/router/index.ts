import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "@/views/index.vue";
import ArticlePage from "@/views/articles/[id].vue";
import AuthorsPage from "@/views/authors/index.vue";
import AuthorPage from "@/views/authors/[id].vue";

import { RouteName, RouteTo } from "@/shared/enums";

const routes: Array<RouteRecordRaw> = [
  {
    path: RouteTo.home,
    name: RouteName.home,
    component: HomePage,
  },
  {
    path: `${RouteTo.article}:id`,
    name: RouteName.article,
    component: ArticlePage,
  },
  {
    path: RouteTo.authors,
    name: RouteName.authors,
    component: AuthorsPage,
  },
  {
    path: `${RouteTo.author}:id`,
    name: RouteName.author,
    component: AuthorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
