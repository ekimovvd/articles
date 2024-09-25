<template>
  <SharedList
    v-if="author"
    :title="author.name"
    subtitle="Articles by this author:"
    :list="articles"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import SharedList from "@/components/shared/list/list.vue";

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
