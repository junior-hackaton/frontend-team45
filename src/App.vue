<template>
  <div>
    <GameScreen v-if="state.screen" />
    <GameRules v-if="state.rules" />
    <GameBoard v-if="state.board" />
    <CongratulationsScreen v-if="state.congatulations" />
    <LegendInfo v-if="state.legend" />
  </div>
</template>

<script>
import GameScreen from './components/GameArea/GameScreen.vue';
import CongratulationsScreen from './components/GameArea/CongratulationsScreen.vue';
import GameBoard from './components/GameArea/GameBoard.vue';
import GameRules from './components/GameArea/GameRules.vue';
import LegendInfo from './components/GameArea/LegendInfo.vue';
import { useStateStore } from './stores/store.js';

export default {
  setup() {
    const state = useStateStore();
    return {
      state
    };
  },

  methods: {
    startGame() {},
    shootFear(index) {},
    restartGame() {},
    endGame() {}
  },
  components: { GameScreen, GameBoard, GameRules, CongratulationsScreen, LegendInfo }
};
</script>
<style lang="scss">
body {
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-size: 16px;
  margin: 0;
  // overflow: hidden;
}
</style>

