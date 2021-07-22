<template>
<div class="card">
  <div class="card-content">
      <div class="content img">
        <h2>{{ product.name }} {{product.price}} R$</h2>
        <img :src="product.image" :alt="product.name"/>
        <b-input 
          type="number" 
          placeholder="Exemplo: 2"
          v-model="ammount"
        />
        <button @click="handleClick">Adicionar</button>
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
.content img{
  width: 80%;
  height: 150px;
}
</style>