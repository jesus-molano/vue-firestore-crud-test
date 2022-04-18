<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  padding: 2rem;
  z-index: 1;

  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>