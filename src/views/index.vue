<template>
  <SharedList title="Articles" :list="articles" :is-articles="true" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import SharedList from "@/components/shared/list/list.vue";

import { Article } from "@/shared/interfaces";

const articles = ref<Article[]>([]);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  articles.value = await response.json();
});
</script>
