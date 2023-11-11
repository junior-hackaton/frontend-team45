<template>
  <div>
    <h2>Congratulations</h2>
    <!-- <p>Количество очков: {{ counter.score }}</p> -->
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js';
export default {
  setup() {
    const counter = useCounterStore();

    return { counter };
  }
};
</script>

<style lang="scss" scoped></style>
