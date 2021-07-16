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
                        <input class="input" type="search" placeholder="Exemplo: carne de soja">
                    </div>
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

export default {
  name: 'Header',
}
</script>


<style>

</style>