<template>
  <div>
    <GameRules />
    <GameBoard />
    <CongratulationsScreen />
    <LegendInfo />
    <p v-if="counter.isTimerOn">Оставшееся время: {{ counter.time }}</p>
    <v-btn @click="counter.startTimer"> Погнали </v-btn>
    <v-btn @click="counter.restartTimer">Начать заново</v-btn>
  </div>
</template>

<script>
import CongratulationsScreen from './CongratulationsScreen.vue';
import GameBoard from './GameBoard.vue';
import GameRules from './GameRules.vue';
import LegendInfo from './LegendInfo.vue';
import { useCounterStore } from '@/stores/counter.js';

export default {
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
  components: { GameRules, GameBoard }
};
</script>

<style lang="scss" scoped></style>
