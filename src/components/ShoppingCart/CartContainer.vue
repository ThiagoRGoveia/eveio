<template>
  <div
    :class="`drawer ${isActive ? 'active' : 'inactive'}`"
    ref="cart"
    :tabindex="isActive ? 2 : -1"
  >
    <button
      @click="handleClose"
      class="close-btn"
      :tabindex="isActive ? 2 : -1"
      @keyup.enter="handleClose"
      ref="closeBtn"
    >
      <b-icon
        icon="close"
        size="is-medium"
      />
    </button>
    <Cart :isActive="isActive" @close="handleClose"/>
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
    handleClose () {
      this.$emit('close')
    }
  },
  mounted () {
    this.$refs.cart.focus()
  }
}
</script>

<style>
  .drawer {
    position: absolute;
    width: 30vw;
    height: 100%;
    background-color: #ebd09f;
    /* transition: all 0.5s ease-in-out; */
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
    background: none;
    border: none;
    outline: none;
  }
</style>