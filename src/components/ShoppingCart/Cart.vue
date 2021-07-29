<template>
  <section class="cart">
    <h1 class="is-size-2 has-text-centered">Carrinho</h1>
      <product-list :isActive="isActive" />
    <div class="checkout-btn">
      <router-link :to="{ name: 'checkout'}" @click.native="handleClose">
        <b-button expanded type="is-primary">Checkout</b-button>
      </router-link>
    </div>
  </section>
</template>

<script>
import ProductList from '@/components/ShoppingCart/ProductList'
export default {
  name: 'Cart',
  props: ['isActive'],
  components: {
    ProductList
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
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
