<template>
<div class="container">
  <div class="columns is-multiline">
    <div class="column is-one-third" v-for="product in products" :key="product.id">
      <product @add="handleAdd" :product="product"  />
    </div>
  </div>
</div>
</template>

<script>
import Product from '@/components/ShoppingArea/Product.vue'
import products from '@/components/Products/products.js'
import ShoppinList from '@/components/ShoppingList.js';
export default {
  name: 'ProductList',
  data () {
    return {
      products: products
    }
  },
  components: {
    Product
  },
  methods: {
    handleAdd (product) {
      ShoppinList.addItem(product)
    }
  }
}
</script>

<style>

</style>