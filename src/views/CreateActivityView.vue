<script setup>
import Form from '../components/Form.vue';

</script>

<template>
  <main>
    <section class="content">
      <Form />
    </section>
  </main>
</template>

<style lang="scss">

main{
  display: grid;
  place-items: center;
  height: 100%;
}

.content {
  padding:  1rem 2rem;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
}
</style>
