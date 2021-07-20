<template>
    <div>
      <section>
        <div v-for="product in list" :key="product.id">
          <product :product="product" />
        </div>
      </section>

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
        list: ShoppinList.getItems(),
      }
  },
  methods: {
    handleClick() {
      this.$emit('open')
    }
  }
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
