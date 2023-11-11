<template>
  <div>
    <h2>Congratulations</h2>
    <p>Количество очков: {{ score }}</p>
  </div>
</template>

<script>
export default {
  props: ['score']
};
</script>
