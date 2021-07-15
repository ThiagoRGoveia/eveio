import Vue from 'vue';
import Router from 'vue-router';

import ShoppingArea from '@/components/ShoppingArea/ShoppingArea.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        content: ShoppingArea
      }
    }
  ]
})

export default router;
