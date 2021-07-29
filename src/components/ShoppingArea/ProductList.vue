<template>
<div class="container">
  <div class="is-flex is-flex-wrap-wrap i">
    <div class="card-content column is-one-quarter" v-for="product in products" :key="product.id">
      <product @add="handleAdd" :product="product"  />
    </div>
  </div>
</div>
</template>

<script>
import Product from '@/components/ShoppingArea/Product.vue'
import ProductList from '@/components/Products/ProductList.js'
import ShoppinList from '@/components/ShoppingList.js';
export default {
  name: 'ProductList',
  data () {
    return {
      products: ProductList.getList()
    }
  },
  components: {
    Product
  },
  methods: {
    handleAdd (product) {
      ShoppinList.add(product)
    },
    handleListChange(products) {
      this.products = products
    }
  },
  created () {
    ProductList.on('list-change', this.handleListChange)
  }
}
</script>

<style>
.card-content {
  margin: 0px;
  min-width: 20rem;
}
.i {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
</style>