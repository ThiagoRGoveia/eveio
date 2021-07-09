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
      <!-- Top part -->
        <section class="hero has-background-dark">
        <div class="hero-body">
        <div class = "container">
        <div class = "columns">
            <div class = "column is-one-fifth">
                <h1>E-Veio</h1>
            </div>
            <div class = "column is-three-fifths is-0-desktop-only">
                <div class="field">
                    <div class="control">
                        <input class="input" type="search" placeholder="Exemplo: carne de soja">
                    </div>
                </div>
            </div>
            <div class = "column is-one-fifth">
                <div class = "is-text is-pulled-right">
                    <h1>Carrinho</h1>
                </div>
            </div>
        </div>
        </div>
        </div>
        </section>
        <!-- End of top part-->

        <section>
            <Carousel :gray="false" />
        </section>
        
        <section>
          <product-list />
        </section>

        <!-- bottom part -->
        <section class="section has-background-black">
        <div class = "container">
        <div class = "columns is-multiline">
            <!-- First row of columns-->
            <div class = "column is-one-fifth">
                <h1>e-Véio</h1>
                <br>
            </div>
            <div class = "column is-one-fifth is-0-desktop-only">
                <h1>Links Úteis</h1>
                <br>
                <h2>    HOME</h2>
            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
                <div class = "is-text">
                    <h1>Disponivel Na Playstore</h1>
                </div>
            </div>
            <!--End of first row of columns-->
            <!-- First second of columns-->
            <div class = "column is-one-fifth">
                <h1>Av. São Carlos 0001 - Centro</h1>
                <h1>São Carlos - SP CEP: 13450-269</h1>
                <h1>Email: contato@eveio.com.br</h1>
            </div>
            <div class = "column is-one-fifth is-0-desktop-only">
                <h1>  Fale Conosco</h1>
                <br>
                <h2>    FAQ</h2>
            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
            </div>
            <div class = "column is-one-fifth">
                <div class = "is-text">
                    <h1>Disponivel Na Appstore</h1>
                </div>
            </div>
            <!--End of second row of columns-->
        </div>
        </div>
        </section>
        <!-- End of bottom part-->

    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import ProductList from './components/ProductList.vue'
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
    ProductList
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
