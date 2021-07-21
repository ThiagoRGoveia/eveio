<template>
  <span>
    <span>{{ product.name }}</span>
    <span>{{ product.ammount }}</span>
    <span>{{ product.unit }}</span>
    <span>{{ product.ammount * product.price}}</span>
    <button @click="handleRemove">Remover</button>
  </span>
</template>

<script>
import ShoppingList from '@/components/ShoppingList.js'

export default {
  name: 'Product',
  props: ['product'],
  methods: {
    handleRemove () {
      ShoppingList.remove(this.product)
    }
  }
}
</script>

<style>

</style>