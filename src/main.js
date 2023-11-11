import { createApp } from 'vue';
import App from './App.vue';
import GameScreen from './components/GameArea/GameScreen.vue';
import GameRules from './components/GameArea/GameRules.vue';
import GameBoard from './components/GameArea/GameBoard.vue';
import CongratulationsScreen from './components/GameArea/CongratulationsScreen.vue';
import Legend from './components/GameArea/Legend.vue';

const app = createApp(App);


app.component('game-screen', GameScreen);
app.component('game-rules', GameRules);
app.component('game-board', GameBoard);
app.component('congratulations-screen', CongratulationsScreen);
app.component('legend', Legend);

app.mount('#app');
