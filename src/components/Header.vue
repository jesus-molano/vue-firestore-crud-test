<template>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { RouterLink } from "vue-router";

</script>

<style lang="scss" scoped>
  header{
    position: fixed;
    top: 0;
    padding: 2rem;

    a{
      text-decoration: none;
      color: #fff;
    }
  }
</style>