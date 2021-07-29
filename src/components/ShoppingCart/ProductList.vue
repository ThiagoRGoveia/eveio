<template>
  <ul class="cart">
    <li aria-role="cart" role="menuitem" v-for="product in products" :key="product.id">
      <product :product="product" :isActive="isActive" />
    </li>
  </ul>
</template>

<script>
import ShoppinList from '@/components/ShoppingList.js';
import Product from '@/components/ShoppingCart/Product.vue';

export default {
  name: 'ProductList',
  props: ['isActive'],
  data() {
    return {
      products: ShoppinList.getItems(),
    }
  },
  components: { Product },
  methods: {
    handleItemsRemove(products) {
      this.products = products
    }
  },
  created() {
    ShoppinList.on('remove', this.handleItemsRemove)
  },

}
</script>

<style>

</style>