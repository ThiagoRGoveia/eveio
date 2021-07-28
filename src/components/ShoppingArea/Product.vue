<template>
<div class="card product-card">
  <div class="content content-product">
    <h2>{{ product.name }}</h2>
    <figure class="">
    <img :src="product.image" :alt="product.name"/>
    </figure>
    <div class="price">
      <div class="">
        <b-input
          type="number"
          v-model="ammount"
          min="0"
        />
      </div>
      <div class="">
        <b-button @click="handleClick" class=" button is-rounded is-primary" icon-right="plus"></b-button>
      </div>
      <div class="">
        <p>{{ product.price }}R$<br/>     / {{product.unidade}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ToastProgrammatic as Toast } from 'buefy'
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
      if (this.ammount) {
        this.$emit('add', {...this.product, ammount: parseFloat(this.ammount)})
        Toast.open({
            duration: 3000,
            message: "Item adicionado ao carrinho",
            position: 'is-top-right',
            type: 'is-success'
          })
      }
    }
  }
}
</script>

<style>

.product-card {
  width: 100%;
  height: 100%;
  padding: 2.5rem 1.5rem;
}

.content-product {
  height: 100%;
}
.content-product img{
  max-height: 200px;
  width: auto;
}

.content-product {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.price {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.price > div {
  margin-right: 20px;
}

.price input {
  width: 80px;
}

.price button {
  height: 50px;
  width: 50px;
}
</style>