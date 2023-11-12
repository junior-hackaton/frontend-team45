import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStateStore = defineStore('state', {
  state: () => ({
    screen: true,
    rules: false,
    board: false,
    congratulations: false,
    legend: false,
  }),
});
