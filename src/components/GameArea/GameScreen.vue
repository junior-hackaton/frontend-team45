<template>
  <div>
    <GameRules />
    <GameBoard />
    <CongratulationsScreen/>
    <LegendInfo/>
    <GameBoard/>
    <FearItemTransition/>
  </div>
</template>

<script>
import CongratulationsScreen from './CongratulationsScreen.vue';
import GameBoard from './GameBoard.vue';
import GameRules from './GameRules.vue';
import FearItem from './GameTools/FearItem.vue';
import LegendInfo from './LegendInfo.vue';
import { useCounterStore } from '@/stores/counter.js';
import FearItemTransition from './GameTools/FearItemTransition.vue';

export default {
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
  components: { GameRules, GameBoard, FearItem, LegendInfo, CongratulationsScreen, FearItemTransition }
};
</script>

<style lang="scss" scoped></style>
