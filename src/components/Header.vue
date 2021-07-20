<template>
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
                  <b-input v-model="productFilter" type="search" placeholder="Exemplo: carne de soja">
                </div>
                <b-button @click="handleSearch">Procurar</b-button>
              </div>
            </div>
            <div class = "column is-one-fifth">
              <b-button
                class = "is-pulled-right"
                @click="handleClick"
              >
                  Carrinho
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
        <!-- End of top part-->
</template>
<script>
import ProductList from '@/components/Products/ProductList.js'

export default {
  name: 'Header',
  data () {
    return {
      productFilter: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('open')
    },
    handleSearch () {
      ProductList.setFilter({name: this.productFilter})
      ProductList.filter()
    }
  }
}
</script>


<style>

</style>