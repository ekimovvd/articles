<template>
  <SharedList title="Authors" :list="authors" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import SharedList from "@/components/shared/list/list.vue";

import { Author } from "@/shared/interfaces";

const authors = ref<Author[]>([]);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  authors.value = await response.json();
});
</script>
