<template>
    <section class="hero">
      <div class="hero-body">
        <div class = "container">
          <div class = "columns is-vcentered">
            <div class = "column is-one-fifth home-btn">
              <router-link to="/">
                <img src="@/assets/logo.png" alt="home">
              </router-link>
            </div>
            <div class = "column is-three-fifths">
              <b-field>
                  <b-input class="is-expanded"
                    v-model="productFilter"
                    type="search"
                    placeholder="Exemplo: picanha"
                    @keyup.enter.native="handleSearch"
                  />
                <b-button @click="handleSearch">
                  <b-icon icon="magnify" size="mdi-18px"/>
                </b-button>
              </b-field>
            </div>
            <div class = "column is-one-fifth">
              <b-button
                class = "is-pulled-right cart-btn"
                @click="handleClick"
                rounded
              >
                <b-icon icon="cart"/>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
.hero-body {
  padding: 30px;
  background-color: #003d4e;
}

.home-btn {
  height: 60px;
  padding: 0 !important;
}

.home-btn img{
  height: 100%;
}

.cart-btn{
  width: 80px !important;
  height: 80px !important;
  background:#7ECF3F !important;
  color: black !important;
  border: none !important;
}

.cart-btn span.icon{
  width: 60px !important;
  height: 60px !important;
}

.cart-btn .mdi-24px.mdi:before{
  font-size: 40px !important;
}
</style>