<template>
    <div class="eveio">
      <CartContainer
        :isActive="isCartActive"
        @close="handleClose"
      />
      <Header @open="handleOpen"/>
      <div class="main-container">
        <router-view name="content" :key="$route.fullPath" />
      </div>
      <BottomPart/>
    </div>
</template>

<script>
import BottomPart from '@/components/BottomPart.vue'
import Header from '@/components/Header.vue'
import CartContainer from '@/components/ShoppingCart/CartContainer.vue'

export default {
  name: 'App',
  data() {
      return {
        isCartActive: false
      }
  },
  methods: {
    handleClose () {
      this.isCartActive = false
    },
    handleOpen () {
      this.isCartActive = true
    }
  },
  components: {
    Header,
    BottomPart,
    CartContainer
  }
}
</script>

<style>
.eveio {
  position: relative;
  padding: 5px;
  background-color: #007191;
}
.main-container {
  min-height: 70vh;
  padding-top: 50px;
  background-color: rgb(197, 220, 240);
}
</style>
