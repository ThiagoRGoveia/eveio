<template>
    <div>
      <section>
        <div v-for="item in Array.from(Array(intensCount).keys())" :key="item">
          OI
        </div>
      </section>

    </div>
</template>

<script>
import ShoppinList from '@/components/ShoppingList.js';

export default {
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
      console.log('itemAdd')
      this.intensCount++
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
