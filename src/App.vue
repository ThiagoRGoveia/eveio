<template>
    <div class="eveio">
       <CartContainer
        :isActive="isCartActive"
        @close="handleClose"
        />
        <section>
            <Header @open="handleOpen"/>
        </section>

        <section>
            <Carousel :gray="false" />
        </section>

        <section>
          <ProductList />
        </section>

       <section>
           <BottomPart/>
       </section>
    </div>
</template>

<script>
import BottomPart from '@/components/BottomPart.vue'
import Carousel from '@/components/Carousel.vue'
import ProductList from './components/ProductList.vue'
import Header from '@/components/Header.vue'
import CartContainer from '@/components/CartContainer.vue'

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
    Carousel,
    ProductList,
    Header,
    BottomPart,
    CartContainer
  }
}
</script>

<style>
.eveio {
  position: relative;
}
</style>
