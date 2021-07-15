<template>
  <section>
    <Carousel :gray="false" />
    <ProductList />
  </section>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import ProductList from '@/components/ProductList.vue'
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