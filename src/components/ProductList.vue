<template>
<div class="container">
  <div class="columns is-multiline">
    <div class="column is-one-third" v-for="product in products" :key="product.id">
      <product :img="product.image"  />
    </div>
  </div>
</div>
</template>

<script>
import Product from '@/components/Product.vue'
import products from '@/components/Products/products.js'
export default {
  name: 'ProductList',
  data () {
    return {
      products: products
    }
  },
  components: {
    Product
  }
}
</script>

<style>

</style>