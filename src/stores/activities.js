import { defineStore } from "pinia";
import {getAllActivities} from '@/services/firebase/crud';


export const useActivitiesStore = defineStore("activities",{
  id: "activities",
  state: () => ({
    activities: [],
    activity: null,
    loading: false,
    error: null
  }),
  getters: {
    getActivities() {
      return this.activities;
    }
  },
  actions: {
    async fetchActivities() {
      this.posts = []
      this.loading = true
      try {
        const activities = [];
        const querySnapshot = await getAllActivities();
        querySnapshot.forEach(doc => {
          activities.push(doc.data());
        })
        this.activities = activities;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  },
});
