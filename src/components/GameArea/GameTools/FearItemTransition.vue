<template>
    <div>
      <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <div v-if="show" class="box">
            <FearIcon/>
        </div>
    </transition>
    <div class="stable"></div>
    </div>
  </template>
  
  <script>
import FearIcon from './FearIcon.vue';

  export default {
    data() {
        return {
            show: true,
            speed: 0.75,
            delay: Math.floor(Math.random() * 8) + 1,
        };
    },
    methods: {
        beforeEnter(el) {
            el.style.transform = 'translateY(100%)';
        },
        enter(el, done) {
            el.style.animation = `slide-in ${this.speed}s forwards`; // Случайная длительность анимации от 1 до 3 секунд
            setTimeout(() => {
                done();
            }, this.speed * 1000);
        },
        // leave(el, done) {
        //     el.style.animation = `slide-out ${this.speed}s backwards`;
        //     setTimeout(() => {
        //         done();
        //     }, this.speed * 1000);
        // },
    },
    mounted() {
        const repeatAnimation = () => {
            this.show = !this.show;
            setTimeout(repeatAnimation, this.delay * 1000); // Рандомная задержка перед каждым повторением
        };
        repeatAnimation();
    },
    components: { FearIcon }
};
  </script>
  
  <style>
  @keyframes slide-in {
    to {
      transform: translateY(0);
    }
  }
  
  @keyframes slide-out {
    to {
      transform: translateY(100%);
    }
  }
  
  .box {
    width: 100px;
    height: 100px;
  }
  .stable{
    width: 100px;
    height: 100px;
    background-color: rgb(172, 80, 80); 
    position: absolute;
    z-index: 1000;
  }
  </style>