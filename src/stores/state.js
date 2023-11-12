import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useStateStore = defineStore('state', {
  state: () => ({
    showGameRules: false,
      selectedDifficulty: 'easy',
      difficultyOptions: ['easy', 'medium', 'hard'],
      selectActive: false,
      showLegend: false,
      showGameBoard: false
  }),
});
