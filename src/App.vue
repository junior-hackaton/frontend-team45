<template>
  <div>
    <game-screen />
    <game-rules />
    <game-board />
    <congratulations-screen />
    <legend />
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
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
}
</style>
