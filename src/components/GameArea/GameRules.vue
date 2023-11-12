<template>
  <div v-if="rulesText" class="rules__text">
    <div class="rules__content">
      <button class="rules__button" @click="closeRulesText">×</button>
      <div>
        <h2 class="rules__title">Правила</h2>
        <p>
          Сражайтесь со страхами, кликая по ним курсором. За каждое успешное попадание вы получаете
          очки. Постарайтесь набрать максимальное количество очков за отведенное время.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rulesText: Boolean
  },
  methods: {
    closeRulesText() {
      this.$emit('close-rules-text');
    }
  }
};
</script>

<style lang="scss" scoped>
// Rules
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
    @media screen and (max-width:540px) {
          margin: 0 1em;
    }
  }
  &__title {
    margin-bottom: 1em;
  }

  &__button {
    position: absolute;
    top: 0.6em;
    left: 82%;
    font-size: 35px;
    background: none;
    border: none;
    color: rgb(114, 28, 28);
    cursor: pointer;
  }
}
</style>
