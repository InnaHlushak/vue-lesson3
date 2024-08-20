import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

//Bootstrap
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

//Vuetyfi
import 'vuetify/styles';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetify = createVuetify({
    components,
    directives,
})

//Axios
import axios from 'axios';

//Глобально зареєстровані компоненти
import Favorites from '@/components/Favorites.vue';


const app = createApp(App);
app.component('Favorites', Favorites);

app.use(vuetify).mount('#app');

//createApp(App).mount('#app');
