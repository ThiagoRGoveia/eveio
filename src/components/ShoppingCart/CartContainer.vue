<template>
  <div :class="`drawer ${isActive ? 'active' : 'inactive'}`">
    <button @click="handleClick">Fechar</button>
    <Cart />
  </div>
</template>

<script>
import Cart from '@/components/ShoppingCart/Cart.vue'

export default {
  name: 'CartContainer',
  props: ['isActive'],
  components: {
    Cart
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .drawer {
    position: absolute;
    width: 30vw;
    height: 100%;
    background-color: lightcoral;
    transition: all 0.5s ease-in-out;
    right: 0;
    top: 0;
    z-index: 99;
  }
  .drawer.active {
    transform: translateX(0);
  }
  .drawer.inactive {
    transform: translateX(1000px);
  }
</style>