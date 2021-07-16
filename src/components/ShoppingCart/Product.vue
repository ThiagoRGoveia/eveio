<template>
  <span>
    <span>{{ product.name }}</span>
    <span>{{ product.ammount }}</span>
    <span>{{ product.unit }}</span>
    <span>{{ product.ammount * product.price}}</span>
    <button>Remover</button>
  </span>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

<style>

</style>