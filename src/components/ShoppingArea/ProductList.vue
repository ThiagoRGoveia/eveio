<template>
<div class="container">
  <div class="is-flex is-flex-wrap-wrap i">
    <div :class="'card-content column ' + columnClass" v-for="product in products" :key="product.id">
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
      products: ProductList.getList(),
      windowWidth: window.innerWidth
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
    },
    handleResize () {
      this.windowWidth = window.innerWidth
    }
  },
  created () {
    ProductList.on('list-change', this.handleListChange)
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    columnClass() {
      if (this.windowWidth > 1130) {
        return 'is-one-quarter'
      } else if (this.windowWidth > 785) {
        return 'is-one-third'
      } else if (this.windowWidth > 526) {
        return 'is-one-half'
      } else {
        return 'is-full'
      }
    }
  },
}
</script>

<style>

.card-content {
  margin: 0px;
  min-width: 17.75rem;
  max-width: 30rem;
}
.i {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
</style>