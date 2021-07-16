<template>
  <section>
    <Carousel :gray="false" />
    <ProductList />
  </section>
</template>

<script>
import Carousel from '@/components/ShoppingArea/Carousel.vue'
import ProductList from '@/components/ShoppingArea/ProductList.vue'
export default {
  name: 'ShoppingArea',
  components: {
    Carousel,
    ProductList
  }
}
</script>

<style>

</style>