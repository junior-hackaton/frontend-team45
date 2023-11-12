<template>
  <div class="container">
    <div v-if="!showGameScreen" class="game-board">
      <div class="game-board__buttons">
        <button class="game-board__button" @click="restartGame">Начать заново</button>
        <button class="game-board__button" @click="closeGameBoard">Главное меню</button>
      </div>
      <div class="game-board__field"></div>
    </div>
  </div>
</template>

<script>
import { useStateStore } from '../../stores/store';

export default {
  data() {
    const state = useStateStore();
    return {
      // showGameRules: false,
      // selectedDifficulty: 'easy',
      // difficultyOptions: ['easy', 'medium', 'hard'],
      // selectActive: false,
      // showLegend: false,
      // showGameBoard: false
      state
    };
  },
  methods:{
    closeGameBoard(){
      this.state.showGameBoard = false;
    }
  }
};
</script>

<style lang="scss" scoped>
//
.container {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.game-board {
  position: absolute;
  top: 3%;
  left: 0;
  width: 100%;
  background-color: rgb(77, 154, 133);
  height: 100vh;
  &__buttons {
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 650px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  &__button {
    cursor: pointer;
    max-width: 18em;
    width: 100%;
    color: lighten(rgb(172, 80, 80), 80%);
    font-size: 16px;
    line-height: 45px;
    position: relative;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    background-color: rgb(43 70 29);
    font-weight: 900;
    letter-spacing: 1px;
    white-space: nowrap;
    margin-bottom: 1em;
    &:first-child {
      @media screen and (max-width: 680px) {
        margin-bottom: 1em;
      }
      @media screen and (max-width: 400px) {
        margin-bottom: 0.6em;
      }
    }
    &:hover {
      color: rgb(140, 148, 128);
      text-shadow: -1px -1px 0 (rgb(172, 80, 80), 9.5%);
      transition: all 0.3s linear;
    }
    @media screen and (max-width: 630px) {
      font-size: 14px;
    }
  }
  &__field {
    width: 90%;
    max-width: 80em;
    margin-left: auto;
    margin-right: auto;
    height: 35em;
    background-color: rgb(71, 108, 86);
    border: 2px solid #000;
    @media screen and (max-width: 1030px) {
      max-height: 30em;
    }
  }
}
</style>
