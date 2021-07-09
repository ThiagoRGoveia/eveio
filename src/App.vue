<template>
    <div>
      <!-- <div class="container">
          <div class="columns">
            <div class="column">
                <b-input v-model="data" />
            </div>
            <div class="column">
                <b-input v-model="data" />
            </div>
          </div>
      </div> -->

        <section>
            <Header/>
        </section>

        <section>
            <Carousel :gray="false" />
        </section>
        
        <section>
          <product-list />
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
export default {
  name: 'App',
  data() {
      return {
        inputValue: 'oi',
      }
  },
  methods: {
  },
  components: {
    Carousel,
    ProductList,
    Header,
    BottomPart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
