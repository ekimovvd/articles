<template>
  <div>
    <div v-if="article">
      <h1>{{ article.title }}</h1>

      <p>{{ article.body }}</p>

      <router-link :to="`/authors/${article.userId}`">
        Author: {{ article.userId }}
      </router-link>
    </div>

    <br />

    <router-link to="/">Back to all articles</router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { Article } from "@/shared/interfaces";

const route = useRoute();
const article = ref<Article | null>(null);

onMounted(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  );

  article.value = await response.json();

  console.log(article.value);
});
</script>
