<template>
  <div>
    <h1>Здарова ребята</h1>
    <h1>{{ store.count }}</h1>
    <v-btn @click="store.increment">Добавить 1</v-btn>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter.js';
export default {
  setup() {
    const store = useCounterStore();

    return { store };
  }
};
</script>

<style lang="scss" scoped></style>
