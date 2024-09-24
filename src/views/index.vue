<template>
  <div>
    <h1>All Articles</h1>

    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="`/articles/${article.id}`">
          {{ article.title }}
        </router-link>

        by

        <router-link :to="`/authors/${article.userId}`">
          {{ article.userId }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { Article } from "@/shared/interfaces";

const articles = ref<Article[]>([]);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  articles.value = await response.json();

  console.log(articles.value);
});
</script>
