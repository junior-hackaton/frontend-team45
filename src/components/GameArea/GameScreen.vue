<template>
  <div>
    <GameRules />
    <GameBoard />
    <CongratulationsScreen />
    <LegendInfo />
  </div>
</template>

<script>
import CongratulationsScreen from './CongratulationsScreen.vue';
import GameBoard from './GameBoard.vue';
import GameRules from './GameRules.vue';
import LegendInfo from './LegendInfo.vue';

export default { components: { GameBoard, GameRules, CongratulationsScreen, LegendInfo } };
</script>

<style lang="scss" scoped></style>
