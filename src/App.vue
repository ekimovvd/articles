<template>
  <nav>
    <router-link v-for="link in links" :key="link.to" :to="link.to">
      {{ link.label }}
    </router-link>
  </nav>

  <router-view />
</template>

<script lang="ts" setup>
import { RouteTo } from "@/shared/enums";

interface Link {
  label: string;
  to: RouteTo;
}

const links: Link[] = [
  {
    label: "Articles",
    to: RouteTo.home,
  },
  {
    label: "Authors",
    to: RouteTo.authors,
  },
];
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
