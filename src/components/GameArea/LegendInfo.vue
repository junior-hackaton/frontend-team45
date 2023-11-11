<template>
  <div class="container">
    <div v-if="legendText" class="overlay"></div>
    <div v-if="legendText" class="legend__text">
      <div class="legend__content">
        <button class="legend__button" @click="closeLegendText">Назад</button>
        <div>
          <h2 class="legend__title">Легенда страхов</h2>
          <p class="legend__description">текст легенды страхов</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    legendText: Boolean
  },
  methods: {
    closeLegendText() {
      this.$emit('close-legend-text');
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 50vh;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.legend {
  &__text {
    position: absolute;
    top: 5%;
    left: 3%;
    padding: 2em 2em;
    max-width: 1440px;
    width: 100%;
    height: 80vh;
    background-color: #21654e;
  }

  &__button {
    position: absolute;
    top: 10%;
    left: 80%;
    font-size: 18px;
    background: none;
    border-radius: 10px;
    border: 2px rgb(34, 55, 20) solid;
    padding: 1em 1.5em;
    color: rgb(224, 216, 216);
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
    background-color: rgb(32, 63, 47);
    transition: 0.3s all;
  }
  }

  &__title {
    font-size: 34px;
    color: rgb(194, 212, 212);
    line-height: 20px;
    font-weight: 100;
    text-transform: uppercase;
  }
  &__description {
    color: rgb(168, 186, 186);
    text-align: left;
    font-size: 22px;
    line-height: 20px;
    font-weight: 100;
    letter-spacing: 1px;
  }
}
</style>
