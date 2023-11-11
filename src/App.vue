<template>
  <div>
    <game-rules></game-rules>
    <game-board></game-board>
    <congratulations-screen></congratulations-screen>
    <legend></legend>
  </div>
</template>

<script>
import GameScreen from './components/GameArea/GameScreen.vue';
import GameRules from './components/GameArea/GameRules.vue';
import GameBoard from './components/GameArea/GameBoard.vue';
import CongratulationsScreen from './components/GameArea/CongratulationsScreen.vue';
import Legend from './components/GameArea/Legend.vue';
import Timer from './components/GameArea/Timer.vue';
import Weapon from './components/GameArea/Weapon.vue';
import ScoreCounter from './components/GameArea/ScoreCounter.vue';
import Settings from './components/Settings.vue';

export default {
  data() {
    return {
      gameStarted: false,
      gameOver: false,
      fears: [],
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
