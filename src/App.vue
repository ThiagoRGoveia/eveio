<template>
    <div class="eveio">
      <CartContainer
        v-if="isCartActive"
        :isActive="isCartActive"
        @close="handleClose"
      />
      <component :is="isMobile ? 'MobileHeader' : 'Header'" @open="handleOpen"/>
      <div class="main-container">
        <div class="container">
          <Bradcrumbs />
          <router-view name="content" :key="$route.fullPath" />
        </div>
      </div>
      <component :is="isMobile ? 'MobileBottomPart' : 'BottomPart'" @open="handleOpen"/>
    </div>
</template>

<script>
import BottomPart from '@/components/BottomPart.vue'
import Header from '@/components/Header.vue'
import CartContainer from '@/components/ShoppingCart/CartContainer.vue'
import Bradcrumbs from '@/components/Bradcrumbs.vue'
import MobileBottomPart from '@/components/mobileBottomPart.vue'
import MobileHeader from '@/components/mobileHeader.vue'

export default {
  name: 'App',
  data() {
      return {
        windowWidth: window.innerWidth,
        isCartActive: false
      }
  },
  methods: {
    handleClose () {
      this.isCartActive = false
    },
    handleOpen () {
      this.isCartActive = true
    },
    handleResize () {
      this.windowWidth = window.innerWidth
    }
  },
  components: {
    Header,
    BottomPart,
    CartContainer,
    Bradcrumbs,
    MobileBottomPart,
    MobileHeader
  },
  computed: {
    isMobile() {
      if (this.windowWidth <= 760) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main.scss';

.eveio {
  position: relative;
  overflow: hidden;
}
.main-container {
  min-height: 70vh;
  padding: 50px 0;
  background-color: rgb(197, 220, 240);
}
</style>
