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
        list: [],
        intensCount: 0,
      }
  },
  methods: {
    handleClick() {
      this.$emit('open')
    },
    handleItemAdd() {
      this.list = ShoppinList.getItems()
    },
    handleItemRemove() {
      console.log('itemRemove')
    }
  },
  created () {
    ShoppinList.addWatcher('add', this.handleItemAdd)
    ShoppinList.addWatcher('remove', this.handleItemRemove)
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
