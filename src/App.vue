<template>
<div>
<game-screen/>
<game-rules/>
<game-board/>
<congratulations-screen/>
<legend/>
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
  },
  components: {
    GameScreen,
    GameRules,
    GameBoard,
    CongratulationsScreen,
    Legend,
    Timer,
    Weapon,
    ScoreCounter,
    Settings
  }
};
</script>
