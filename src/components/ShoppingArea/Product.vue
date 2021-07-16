<template>
<div class="card">
  <div class="card-content">
      <div class="content">
        <img :src="product.image" alt="img" />
        <b-input type="number" v-model="ammount" />
        <button @click="handleClick">ADD</button>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Product',
  props:  ['product'],
  data () {
    return {
      ammount: undefined
    }
  },
  methods: {
    handleClick () {
      this.$emit('add', {...this.product, ammount: parseFloat(this.ammount)})
    }
  }
}
</script>

<style>

</style>