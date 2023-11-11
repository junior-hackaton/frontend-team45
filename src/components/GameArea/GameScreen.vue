<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="main">
          <h1 class="main__title">Победи страхи ребенка</h1>
          <p class="main__description">В этой игре бла бла бла</p>
          <router-link to="/game-board">
            <button class="main__button" @click="startGame">Старт</button>
          </router-link>
        </div>

        <div class="main__options">
          <div class="main__options-buttons">
            <button class="main__options-button" @click="toggleRulesText">Правила</button>

            <router-link class="main__options-button" to="/legend">Легенда страхов</router-link>
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

    <div v-if="rulesText" class="rules__text">
      <div class="rules__content">
        <button class="rules__button" @click="closeRulesText">×</button>
        <div>
          <h2 class="rules__title">Правила</h2>
          <p>
            Сражайтесь со страхами, кликая по ним курсором. За каждое успешное попадание вы
            получаете очки. Постарайтесь набрать максимальное количество очков за отведенное время.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Legend from './Legend.vue';
import GameBoard from './GameBoard.vue';

export default {
  components: {
    Legend,
    GameBoard
  },
  data() {
    return {
      selectedDifficulty: 'easy',
      rulesText: false,
      difficultyOptions: ['easy', 'medium', 'hard']
    };
  },
  methods: {
    startGame() {},
    toggleRulesText() {
      this.rulesText = !this.rulesText;
    },
    closeRulesText() {
      this.rulesText = false;
    },
    toggleSelect() {
      this.selectActive = !this.selectActive;
    },
    selectDifficulty(difficulty) {
      this.selectedDifficulty = difficulty;
      this.selectActive = false;
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
  padding: 3em;
  height: 100vh;
}
.container {
  display: block;
  text-align: center;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.main {
  text-align: center;
  &__title {
    color: rgb(255, 232, 232);
    text-transform: uppercase;
    margin-bottom: 2em;
  }
  &__description {
    color: rgb(49, 30, 30);
    margin-bottom: 2em;
  }

  &__button {
    display: block;
    max-width: 18em;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3em;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    line-height: 16px;
    padding: 2em 0;
    text-decoration: none;
    border: 1px solid rgb(156, 86, 86);
    background-color: rgb(205, 84, 84);
    color: rgb(222, 215, 215);
    overflow: hidden;
    cursor: pointer;
    border-radius: 6px;

    &:hover {
      box-shadow: 1px 1px 25px 10px rgba(248, 146, 165, 0.4);
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(120deg, transparent, rgba(146, 148, 248, 0.4), transparent);
    }
    &:hover:before {
      left: 100%;
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
    margin-bottom: 2em;
  }

  &__options-button {
    cursor: pointer;
    max-width: 18em;
    width: 100%;
    color: rgb(222, 215, 215);
    font-size: 16px;
    font-weight: 600;
    line-height: 45px;
    margin: 0 0 2em;
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
  }
}

//Rules
.rules {
  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &__content {
    position: relative;
    max-width: 28em;
    text-align: left;
    width: 100%;
    line-height: 24px;
    background-color: rgb(140, 184, 169);
    color: rgb(24, 4, 4);
    padding: 1.5em;
    border-radius: 5px;
    text-align: center;
  }
  &__title {
    margin-bottom: 1em;
  }

  &__button {
    position: absolute;
    top: 0.3em;
    left: 11.5em;
    font-size: 35px;
    background: none;
    border: none;
    color: rgb(114, 28, 28);
    cursor: pointer;
  }
}

//Difficulty select

.custom-select-container {
  cursor: pointer;
  margin-top: 1em;
}
.custom-select-dropdown {
  max-width: 10em;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
