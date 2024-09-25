<template>
  <SharedList title="Articles" :list="displayedArticles" :is-articles="true" />
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import SharedList from "@/components/shared/list/list.vue";

import { Article } from "@/shared/interfaces";
import { useViewedArticlesStore } from "@/stores/viewedArticles";

const route = useRoute();
const viewedArticlesStore = useViewedArticlesStore();

const articles = ref<Article[]>([]);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  articles.value = await response.json();
});

const displayedArticles = computed(() => {
  const authorId = route.query.author;

  const filteredArticles = articles.value.map((article) => ({
    ...article,
    isViewed: isViewed(article.id.toString()),
  }));

  return authorId
    ? filteredArticles.filter(
        (article) => article.userId.toString() === authorId
      )
    : filteredArticles;
});

const isViewed = (articleId: string) =>
  viewedArticlesStore.viewedArticles.includes(articleId);
</script>
