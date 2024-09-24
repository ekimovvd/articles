<template>
  <div>
    <h1>Authors</h1>

    <ul>
      <li v-for="author in authors" :key="author.id">
        <router-link :to="`/authors/${author.id}`">
          {{ author.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { Author } from "@/shared/interfaces";

const authors = ref<Author[]>([]);

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  authors.value = await response.json();

  console.log(authors.value);
});
</script>
