<template>
  <span>
    <div class="columns">
      <div class="column">
        <span> {{product.name}} {{product.price}}R$ </span>
        <span><br/>Quantidade: {{product.ammount}}</span>
        <span><br/>Preço total: {{ product.ammount * product.price}}<br/></span>
      </div>
      <div class="column">
        <button class="button is-medium" @click="handleRemove">Remover</button>
      </div>
    </div>
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