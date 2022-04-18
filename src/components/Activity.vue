<script setup>
  const props = defineProps(['activities'])

  console.log(props);
</script>

<template>
   <ul>
      <li v-for="activity in activities" :key="activity.id">
      <div class="activity">
        <h2>{{ activity.title }}</h2>
        <p> {{ activity.description }}</p>
        <p>Fecha: {{ activity.date }}</p>
        <p>Desde: {{ activity.from }} hasta {{ activity.to }}</p>
      </div>
      </li>
    </ul>
</template>



<style lang="scss" scoped>

</style>