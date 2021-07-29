<template>
<div class="card product-card">
  <div class="content content-product">
    <h2>{{ product.name }}</h2>
    <figure class="">
      <img :src="product.image" :alt="product.name"/>
    </figure>
    <div class="price is-pulled-down">
      <div class="">
        <b-input class="input-quantidade"
          type="number"
          v-model="ammount"
          min="0"
        />
      </div>
      <div class="buttonPlus">
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
  display: flex;
  flex-direction: column;
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

.buttonPlus {
  text-align: center;
}

.input-quantidade {
  text-align: center;
}

.price {
  position: relative;
  bottom : 0;
  text-align: center;
  display: flex;
  justify-content: flex-start;
}

.price > div {
  margin-right: 1.1rem;
}

.price input {
  width: 80px;
}

.price button {
  height: 50px;
  width: 50px;
}
</style>