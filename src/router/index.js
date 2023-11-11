import { createRouter, createWebHistory } from 'vue-router'
import GameBoard from '../components/GameArea/GameScreen.vue';
import GameBoard from '../components/GameArea/GameBoard.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: GameScreen,
          },
          {
            path: '/game-board',
            component: GameBoard,
          },

    ]
});


export default router
