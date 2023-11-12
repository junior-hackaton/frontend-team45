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
import GameScreen from './components/GameArea/GameScreen.vue';
import GameRules from './components/GameArea/GameRules.vue';
import GameBoard from './components/GameArea/GameBoard.vue';
import CongratulationsScreen from './components/GameArea/CongratulationsScreen.vue';

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
