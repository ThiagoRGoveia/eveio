<template>
  <div :class="`drawer ${isActive ? 'active' : 'inactive'}`">
    <div
      @click="handleClick"
      role="button"
      class="close-btn"
    >
      <b-icon
        icon="close"
        size="is-medium"
      />
    </div>
    <Cart @close="handleClick"/>
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
    background-color: #ebd09f;
    transition: all 0.5s ease-in-out;
    right: 0;
    top: 0;
    z-index: 99;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    .drawer {
      width: 100%;
    }

  }
  .drawer.active {
    transform: translateX(0);
  }
  .drawer.inactive {
    transform: translateX(10000px);
  }

  .close-btn {
    margin: 10px;
    cursor: pointer;
  }
</style>