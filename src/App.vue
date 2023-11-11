<template>
  <div id="app">
    <game-screen />
    <game-rules />
    <game-board />
    <congratulations-screen />
    <legend-info />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      gameOver: false,
      score: 0
    };
  },
  methods: {
    startGame() {},
    shootFear(index) {},
    restartGame() {},
    endGame() {}
  }
};
</script>
<style lang="scss">
body {
font-family: 'Jost', sans-serif;
  font-style: normal;
  font-size: 16px;
  margin: 0;
  overflow: hidden;
}
</style>
