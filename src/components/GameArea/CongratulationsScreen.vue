<template>
  <div class="wrapper">
    <div class="container">
      <div class="main__congratulations">
        <div class="main__congratulations-content">
          <h1 class="main__congratulations-title">Поздравляем!</h1>
          <p class="main__congratulations-subsription">Вы набрали {{ score }} очков</p>
        </div>
        <div class="main__congratulations-buttons">
          <button class="main__congratulations-button" @click="restartGame">Начать заново</button>
          <button class="main__congratulations-button" @click="goToGameScreen">На главную</button>
        </div>
      </div>
    </div>
    <div v-if="showGameScreen">
      <GameScreen @go-to-main="goToGameScreen" />
    </div>
    <div v-if="showGameBoard">
      <GameBoard @go-to-game="restartGame" />
    </div>
  </div>
</template>

<script>
import GameScreen from './GameScreen.vue';
import GameBoard from './GameBoard.vue';

export default {
  components: {
    GameScreen,
    GameBoard
  },
  data() {
    return {
      showGameScreen: false,
      showGameBoard: false
    };
  },
  props: {
    score: Number
  },
  methods: {
    restartGame() {
      this.showGameBoard = true;
      console.log('Game restarted');
    },
    goToGameScreen() {
      this.showGameScreen = false;
    },
    startGame() {
      this.showGameScreen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: rgb(77, 154, 133);
  padding: 7em 0 0;
  height: 100vh;
}
.container {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.main {
  &__congratulations-title {
    color: rgb(132, 50, 50);
    font-size: 34px;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  &__congratulations-subsription {
    color: rgb(15, 37, 7);
    font-size: 24px;
    margin-bottom: 4em;
  }

  &__congratulations-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 630px) {
      flex-direction: column;
    }
  }

  &__congratulations-button {
    cursor: pointer;
    max-width: 18em;
    width: 100%;
    color: rgb(222, 215, 215);
    font-size: 16px;
    font-weight: 600;
    line-height: 45px;
    position: relative;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    background-color: rgb(172, 80, 80);
    font-weight: 900;
    letter-spacing: 1px;
    transition: all 150ms linear;
    white-space: nowrap;

    &:hover {
      background: (rgb(172, 80, 80), 1.5%);
      color: lighten(rgb(172, 80, 80), 18%);
      text-decoration: none;
      text-shadow: -1px -1px 0 (rgb(172, 80, 80), 9.5%);
      transition: all 250ms linear;
    }

    &:first-child {
      @media screen and (max-width: 630px) {
        margin-bottom: 2em;
      }
    }
    @media screen and (max-width: 320px) {
      max-width: 15em;
    }
  }
}
</style>
