<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>

    <p>{{ article.body }}</p>

    <router-link :to="`/authors/${article.userId}`">
      Author: {{ article.userId }}
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { Article } from "@/shared/interfaces";
import { useViewedArticlesStore } from "@/stores/viewedArticles";

const route = useRoute();
const viewedArticlesStore = useViewedArticlesStore();

const article = ref<Article | null>(null);

onMounted(async () => {
  const articleId = route.params.id as string;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );

  article.value = await response.json();

  if (article.value) {
    viewedArticlesStore.addArticle(articleId);
  }
});
</script>
