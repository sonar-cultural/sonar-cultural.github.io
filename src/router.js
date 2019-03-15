import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Artefatos from './views/Artefatos.vue';
import Equipe from './views/Equipe.vue';
import Processo from './views/Processo.vue';
import Ferramentas from './views/Ferramentas.vue';
import Papeis from './views/Papeis.vue';
import Produto from './views/Produto.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/artefatos',
      name: 'artefatos',
      component: Artefatos,
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: Equipe,
    },
    {
      path: '/processo',
      name: 'processo',
      component: Processo,
    },
    {
      path: '/ferramentas',
      name: 'ferramentas',
      component: Ferramentas,
    },
    {
      path: '/papeis',
      name: 'papeis',
      component: Papeis,
    },
    {
      path: '/produto',
      name: 'produto',
      component: Produto,
    },
  ],
});
