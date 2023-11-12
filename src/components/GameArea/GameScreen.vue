<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="main">
          <div class="main__text">
            <h1 class="main__title">Сразись с детскими страхами</h1>
            <p class="main__description">
              В этой игре вам предстоит противостоять детским страхам, представленным в виде
              загадочных привидений. Преодолейте все страхи, чтобы освободить детство от теней
              прошлого.
            </p>
          </div>
          <button class="main__button" @click="startGame">Старт</button>
        </div>

        <div class="main__options">
          <div class="main__options-buttons">
            <button class="main__options-button" @click="toggleGameRules">Правила</button>
            <button class="main__options-button" @click="toggleLegend">Легенда страхов</button>
          </div>
          <div class="main__options-difficulty">
            <label class="main__options-difficulty-label" for="difficulty"
              >Выберите уровень сложности</label
            >
            <div class="custom-select-container" @click="toggleSelect">
              <div :class="{ 'custom-select-dropdown': true, active: selectActive }">
                <div
                  class="custom-select-option"
                  v-for="option in difficultyOptions"
                  :key="option"
                  @click="selectDifficulty(option)"
                  :class="{ active: selectedDifficulty === option }"
                >
                  {{ option }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <GameRules :rulesText="showGameRules" @close-rules-text="toggleGameRules" />

    <LegendInfo :legendText="showLegend" @close-legend-text="toggleLegend" />

    <div v-if="showGameBoard">
      <GameBoard />
    </div>
  </div>
</template>

<script>
import GameRules from './GameRules.vue';
import LegendInfo from './LegendInfo.vue';
import GameBoard from './GameBoard.vue';

export default {
  components: {
    GameRules,
    LegendInfo,
    GameBoard
  },
  data() {
    return {
      showGameRules: false,
      selectedDifficulty: 'easy',
      difficultyOptions: ['easy', 'medium', 'hard'],
      selectActive: false,
      showLegend: false,
      showGameBoard: false
    };
  },
  methods: {
    startGame() {
      this.showGameBoard = true;
      this.$nextTick(() => {
        console.log('showGameBoard:', this.showGameBoard);
      });
    },
    toggleGameRules() {
      this.showGameRules = !this.showGameRules;
      console.log('showGameRules:', this.showGameRules);
    },
    toggleSelect() {
      this.selectActive = !this.selectActive;
    },
    selectDifficulty(difficulty) {
      this.selectedDifficulty = difficulty;
    },
    toggleLegend() {
      this.showLegend = !this.showLegend;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.wrapper {
  background-color: rgb(77, 154, 133);
  padding: 2em;
  height: 100vh;
  @media screen and (max-width: 400px) {
    padding: 1em;
  }
}
.container {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.main {
  text-align: center;
  &__text {
    background: #57986b;
    padding: 1em;
    border-radius: 8px;
    max-width: 45em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.5em;
    @media screen and (max-width: 560px) {
      margin-bottom: 0.6em;
    }
  }
  &__title {
    color: rgb(255, 232, 232);
    text-transform: uppercase;
    font-size: 34px;
    line-height: 36px;
    letter-spacing: 2px;
    font-weight: 700;
    margin-bottom: 0.5em;
    @media screen and (max-width: 630px) {
      font-size: 25px;
    }
    @media screen and (max-width: 450px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
  &__description {
    max-width: 30em;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    font-weight: 400;
    color: rgb(15, 77, 25);
    text-align: left;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
  }

  &__button {
    display: block;
    max-width: 18em;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    line-height: 16px;
    padding: 2em 0;
    text-decoration: none;
    border: 1px solid rgb(156, 86, 86);
    background-color: rgb(162 62 62);
    color: rgb(15 37 2);
    overflow: hidden;
    cursor: pointer;
    border-radius: 6px;

    &:hover {
      box-shadow: 1px 1px 25px 10px rgba(10, 10, 23, 0.2);
      transition: 0.3s all;
    }
    @media screen and (max-width: 630px) {
      transform: scale(0.8);
      margin-bottom: 1em;
    }
    @media screen and (max-width: 320px) {
      margin-bottom: 0em;
    }
  }

  &__options {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  &__options-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
    @media screen and (max-width: 680px) {
      flex-direction: column;
    }
    @media screen and (max-width: 400px) {
      margin-bottom: 0.6em;
    }
  }

  &__options-button {
    cursor: pointer;
    max-width: 18em;
    width: 100%;
    color: rgb(222, 215, 215);
    font-size: 16px;
    line-height: 45px;
    position: relative;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    background-color: rgb(172, 80, 80);
    font-weight: 900;
    letter-spacing: 1px;
    white-space: nowrap;
    &:first-child {
      @media screen and (max-width: 680px) {
        margin-bottom: 1em;
      }
      @media screen and (max-width: 400px) {
        margin-bottom: 0.6em;
      }
    }

    &:hover {
      background: (rgb(172, 80, 80), 1.5%);
      color: lighten(rgb(172, 80, 80), 18%);
      text-shadow: -1px -1px 0 (rgb(172, 80, 80), 9.5%);
      transition: all 250ms linear;
    }
    @media screen and (max-width: 630px) {
      font-size: 14px;
    }
  }
}
button {
  @media screen and (max-width: 400px) {
    transform: scale(0.7);
  }
}

//Difficulty select
.main__options-difficulty-label {
  line-height: 10px;
}
.custom-select-container {
  cursor: pointer;
  margin-top: 1em;
  @media screen and (max-width: 320px) {
    margin-top: 0;
  }
}
.custom-select-dropdown {
  max-width: 10em;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 400px) {
    transform: scale(0.9);
  }
}
.custom-select-option {
  padding: 0.6em;
  cursor: pointer;
  margin-bottom: 0.5em;
  &.active {
    outline: 2px solid #443434;
  }
}
.custom-select-option:hover {
  outline: 1px rgb(87, 45, 45) solid;
}
</style>
