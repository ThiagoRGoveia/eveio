<template>
    <section class="cart">
      <h1 class="is-size-2 has-text-centered">Carrinho</h1>
      <ul>
        <li aria-role="cart" role="menuitem" v-for="product in products" :key="product.id">
          <product :product="product" :isActive="isActive" />
        </li>
      </ul>
      <div class="checkout-btn">
        <router-link :to="{ name: 'checkout'}" @click.native="handleClose">
          <b-button expanded type="is-primary">Checkout</b-button>
        </router-link>
      </div>
    </section>
</template>

<script>
import ShoppinList from '@/components/ShoppingList.js';
import Product from '@/components/ShoppingCart/Product.vue';

export default {
  components: { Product },
  name: 'Cart',
  props: ['isActive'],
  data() {
      return {
        products: ShoppinList.getItems(),
      }
  },
  methods: {
    handleItemsRemove(products) {
      this.products = products
    },
    handleClose () {
      this.$emit('close')
    }
  },
  created() {
    ShoppinList.on('remove', this.handleItemsRemove)
  },
}
</script>

<style >
 .cart {
   margin: 15px 25px;
 }

 .cart h1 {
   border-bottom: 1px red solid;
   margin-bottom: 20px;
 }

 .cart li {
   padding-bottom: 20px;
   margin-bottom: 10px;
   border-bottom: 1px black solid ;
 }

  .checkout-btn button {
    height: 45px;
  }

</style>
