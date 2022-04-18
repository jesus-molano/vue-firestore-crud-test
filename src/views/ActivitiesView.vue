<script setup>
  import { useActivitiesStore } from '@/stores/activities';
  import { storeToRefs } from 'pinia';

  const { activities, loading, error } = storeToRefs(useActivitiesStore())
  const {fetchActivities } = useActivitiesStore();

  fetchActivities()

</script>

<template>
  <div class="activities">
    <h1>Activities</h1>
    <p v-if="loading">Loading posts...</p>
    <ul v-else="activities">
      <li v-for="activity in activities" :key="activity.id">
      <div class="activity">
        <h2>{{ activity.title }}</h2>
        <p> {{ activity.description }}</p>
        <p>Fecha: {{ activity.date }}</p>
        <p>Desde: {{ activity.from }} hasta {{ activity.to }}</p>
      </div>
      </li>
    </ul>
    <p v-if="error">{{ error.message }}</p>
  </div>
</template>


<style lang="scss" scoped>

.activities {
  color: #fff;
  margin: 2rem;

  ul{
    list-style: none;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
}

.activity{
  padding: 1rem;
  background-color: #fff;
  color: #333;
  border-radius: 1rem;
  width: min(100%, 35rem);

  h2{
    font-weight: 700;
    color: rgb(55, 146, 96);
  }
}
</style>