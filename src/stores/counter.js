import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useCounterStore = defineStore('counter', {
  state: () => ({
    time: ref(30),
    isTimerOn: false
  }),
  actions: {
    restartTimer() {
      this.time = 30;
    },
    startTimer() {
      // Получаем текущее время в миллисекундах
      this.isTimerOn = true;
      const startTime = Date.now();

      // Вычисляем время завершения в миллисекундах
      const endTime = startTime + this.time * 1000;

      // Функция для обновления оставшегося времени
      const updateTimer = () => {
        const currentTime = Date.now();
        const remainingTime = endTime - currentTime;

        // Проверяем, осталось ли время
        if (remainingTime <= 0) {
          clearInterval(timerInterval); // Останавливаем интервал, когда время истекло
          this.time = 0;
          this.isTimerOn = false;
        } else {
          // Вычисляем оставшееся время в секундах
          const remainingSeconds = Math.round(remainingTime / 1000);
          this.time = remainingSeconds;
        }
      };
      // Запускаем таймер с интервалом в 1 секунду для обновления оставшегося времени
      const timerInterval = setInterval(updateTimer, 1000);
    }
  }
});