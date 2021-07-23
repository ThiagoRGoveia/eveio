<template>
<div class="card">
  <div class="card-content">
      <div class="content img">
        <h2>{{ product.name }}</h2>
        <img :src="product.image" :alt="product.name"/>
        <div class="columns">
          <div class="column is-4">
            <b-input 
              type="number"
              v-model="ammount"
            />
          </div>
          <div class="column is-3 is-centered">
            <b-button @click="handleClick" class=" button is-rounded is-primary" icon-right="plus"></b-button>
          </div>
          <div class="column is-1">
          </div>
          <div class="column is-3">
            <p>{{ product.price }}R$<br/>     / {{product.unidade}}</p>
          </div>
        </div>
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