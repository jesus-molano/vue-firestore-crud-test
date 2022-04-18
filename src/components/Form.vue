<template>
  <form>
    <div class="title form-content">
      <label for="titleForm">Title</label>
      <input 
        type="text" 
        id="titleForm" 
        placeholder="Necesito acompañante" 
        :value="newActivity.title"
        @change="newActivity.title = $event.target.value">
    </div>
    <div class="description form-content">
      <label for="descriptionForm">Description</label>
      <textarea 
        name="descriptionForm" 
        id="descriptionForm" rows="6" 
        placeholder="Necesito acompañante para ir a...."
        :value="newActivity.description" 
        @change="newActivity.description = $event.target.value">
      </textarea>
    </div>
    <div class="date form-content">
      <label for="dateForm">Date</label>
      <input 
        type="date" 
        name="dateForm" 
        id="dateForm" 
        :value="newActivity.date"
        @change="newActivity.date = $event.target.value">
    </div>
    <div class="time form-content">
      <label for="fromTimeForm">From</label>
      <input 
        type="time" name="fromTimeForm" 
        id="fromTimeForm" 
        :value="newActivity.from"
        @change="newActivity.from = $event.target.value">
      <label for="toTimeForm">To</label>
      <input 
        type="time" 
        name="toTimeForm" 
        id="toTimeForm" 
        value="newActivity.to"
        @change="newActivity.to = $event.target.value">
    </div>
    <button v-on:click="sendForm">Enviar</button>
  </form>
</template>

<script setup>
  import { ref } from 'vue'
  import { addNewActivity } from '@/services/firebase/crud'

  const newActivity = ref({});

  const sendForm = (e) => {
    e.preventDefault();
    addNewActivity(newActivity.value);
    console.table(newActivity.value);
  }
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  .form-content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-block: 0.8rem;

    label {
      font-weight: 700;
    }

    input,
    textarea {
      font-size: 1.2rem;
      border-radius: 0.5rem;
      padding-block: 0.3rem;
      padding-inline: 0.8rem;
    }
  }

  .title {
    width: min(100%, 15rem);
  }

  .description {
    width: min(100%, 30rem);
  }

  .date {
    width: min(100%, 11rem);
  }

  .time {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  button {
    padding: 1rem;
    font-size: 1.5rem;
    color: #333;
  }
}
</style>