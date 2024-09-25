<template>
  <h1 v-if="title">
    {{ title }}
  </h1>

  <h2 v-if="subtitle">
    {{ subtitle }}
  </h2>

  <ul>
    <li v-for="item in list" :key="item.id">
      <router-link
        :to="`/articles/${item.id}`"
        :style="{ color: 'isViewed' in item && item.isViewed ? 'green' : '' }"
      >
        {{ "title" in item ? item.title : item.name }}
      </router-link>

      <span v-if="isArticles">by</span>

      <router-link
        v-if="isArticles"
        :to="`/authors/${(item as Article).userId}`"
      >
        {{ (item as Article).userId }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";

import { Article, Author } from "@/shared/interfaces";

defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  list: {
    type: Array as PropType<Article[] | Author[]>,
    default: () => [],
  },
  isArticles: {
    type: Boolean,
    default: false,
  },
});
</script>
