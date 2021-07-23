<template>
    <div>
      <section>
        <div v-for="product in products" :key="product.id">
          <product :product="product" />
        </div>
      </section>
      <router-link :to="{ name: 'checkout'}" @click.native="handleClose">
        <button class="btn btn-primary">Checkout</button>
      </router-link>
    </div>
</template>

<script>
import ShoppinList from '@/components/ShoppingList.js';
import Product from '@/components/ShoppingCart/Product.vue';

export default {
  components: { Product },
  name: 'Cart',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
