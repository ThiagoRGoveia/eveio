import Vue from 'vue';
import Router from 'vue-router';

import ShoppingArea from '@/components/ShoppingArea/ShoppingArea.vue';
import Checkout from '@/components/Checkout/Checkout.vue'
import Payment from '@/components/Checkout/Payment.vue'

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
