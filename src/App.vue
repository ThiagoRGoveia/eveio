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
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
          data: ''
      }
  },
  components: {
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
