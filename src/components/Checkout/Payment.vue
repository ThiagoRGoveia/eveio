<template>
  <form @submit.prevent="handleSubmition">
    <div class="container">
      <div class="columns">
        <div class="column">
          <b-field group>
            <b-field label="Nome">
              <b-input
                @input="this.$emit('update:name')"
                type="text"
              />
            </b-field>
            <b-field label="Sobrenome">
              <b-input
                @input="this.$emit('update:surname')"
                type="text"
              />
            </b-field>
          </b-field>
          <b-field group>
            <b-field label="Número do cartão">
              <b-input
                @input="this.$emit('update:cardNumber')"
                type="text"
              />
            </b-field>
            <b-field label="CVV">
              <b-input
                @input="this.$emit('update:securityNumber')"
                type="text"
              />
            </b-field>
          </b-field>
          <b-field label="Data de vencimento">
            <!-- TENTAR ABRIR COM TECLADO -->
            <b-datepicker
                :show-week-number="showWeekNumber"
                locale="pt-BR"
                icon="calendar-today"
                trap-focus
                open-on-focus
              >
            </b-datepicker>
          </b-field>
        </div>
        <div class="column">
          <div class="checkout-cart-container">
            <cart />
          </div>
          <b-button native-type="submit" type="is-primary">Finalizar compra</b-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CheckoutPayment',
  methods: {
    handleSubmition () {

    }
  }
}
</script>

<style>

</style>