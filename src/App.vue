<script setup>
  import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.css";

#app{
  height: 100vh;
}
</style>
