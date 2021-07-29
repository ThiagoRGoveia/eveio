<template>
  <div class="ml-6 mb-5">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li :class="$route.name === 'home' ? 'is-active' :'' ">
          <router-link :to="{ name: 'home' }">
            Tela inicial
          </router-link>
        </li>
        <li :class="$route.name === 'checkout' ? 'is-active' :'' ">
          <router-link :to="{ name: 'checkout' }">
            Caixa
          </router-link>
        </li>
        <li :class="$route.name === 'payment' ? 'is-active' :'' ">
          <router-link :to="{ name: 'payment' }">
            Pagamento
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Bradcrumbs'
}
</script>

<style>

</style>