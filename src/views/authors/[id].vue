<template>
  <div>
    <h1 v-if="author">{{ author.name }}</h1>

    <h2>Articles by this author:</h2>

    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="`/articles/${article.id}`">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { Author, Article } from "@/shared/interfaces";

const route = useRoute();

const author = ref<Author | null>(null);
const articles = ref<Article[]>([]);

onMounted(async () => {
  const id = route.params.id;

  const [authorResponse, articlesResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
  ]);

  author.value = await authorResponse.json();
  articles.value = await articlesResponse.json();
});
</script>
