import Vue from 'vue';
import Router from 'vue-router';

import ShoppingArea from '@/components/ShoppingArea/ShoppingArea.vue';
import Checkout from '@/components/Checkout/Checkout.vue'
import Payment from '@/components/Checkout/Payment.vue'
import { publicPath } from '../../vue.config.js'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: publicPath,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        content: ShoppingArea
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      components: {
        content: Checkout
      }
    },
    {
      path: '/payment',
      name: 'payment',
      components: {
        content: Payment
      }
    }
  ]
})

export default router;
