<template>
  <div class="game-board">
    <div class="game-cell" v-for="(fear, index) in fears" :key="index">
      {{ fear }}
    </div>
    <button @click="restartGame">Начать заново</button>
  </div>
</template>

<script>
export default {
  props: ['fears'],
  methods: {
    restartGame() {
      console.log('Game restarted');
    },
  },
};
</script>

<style scoped>
.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.game-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #77a1b5;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #17252a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
