<template>
  <div>
    <h2>Счет</h2>
    <p>Очки: {{ score }}</p>
  </div>
</template>

<script>
export default {
  props: ['score']
};
</script>
