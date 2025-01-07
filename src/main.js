import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vuex from './vuex.js';


const app = createApp(App)

app.use(vuex).mount('#app')
