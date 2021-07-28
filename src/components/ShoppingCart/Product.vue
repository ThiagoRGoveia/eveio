<template>
  <span class="cart-product">
    <p class="label"> {{product.name}} </p>
    <span class="cart-product-description">
      <p>
        <span class="dot">&#8228;</span>Quantidade: {{product.ammount}} - R${{ getPrice(product)}}
      </p>
      <b-button
        @click="handleRemove"
        type="is-danger"
        :tabindex="isActive ? 2 : -1"
        icon-right="delete"
      >
      </b-button>
    </span>
  </span>
</template>

<script>
import ShoppingList from '@/components/ShoppingList.js'

export default {
  name: 'Product',
  props: ['product', 'isActive'],
  methods: {
    handleRemove () {
      ShoppingList.remove(this.product)
    },
    getPrice(product) {
      return (product.ammount * product.price).toFixed(2)
    }
  }
}
</script>

<style>
.dot {
  font-size: 50px;
}

.cart-product .label {
  margin-bottom: 0 !important;
}

.cart-product {
  margin-bottom: 1.5rem !important;
}

.cart-product-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  line-height: 20px;
}

.cart-product-description p {
  line-height: inherit;
}
</style>