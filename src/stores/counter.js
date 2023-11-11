import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const score = ref(0);
  const doubleCount = computed(() => score.value * 2);

  return { score, doubleCount };
});
