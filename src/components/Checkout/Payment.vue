<template>
  <form @submit.prevent="handleSubmition">
    <div class="container">
      <div class="columns">
        <div class="column">
          <b-field group>
            <b-field label="Nome">
              <b-input
                @input="this.$emit('update:name')"
                v-model="name"
                type="text"
              />
            </b-field>
            <b-field label="Sobrenome">
              <b-input
                v-model="surname"
                type="text"
              />
            </b-field>
          </b-field>
          <b-field group>
            <b-field label="Número do cartão">
              <b-input
                v-model="cardNumber"
                type="text"
              />
            </b-field>
            <b-field label="CVV">
              <b-input
                v-model="securityNumber"
                type="text"
              />
            </b-field>
          </b-field>
          <b-field label="Data de vencimento">
            <!-- TENTAR ABRIR COM TECLADO -->
            <b-datepicker
                v-model="date"
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
import CheckoutInformation from '@/components/Checkout/CheckoutInformation.js'

export default {
  name: 'CheckoutPayment',
  data () {
    return {
      name: '',
      surname: '',
      cardNumber: '',
      securityNumber: '',
      date: null
    }
  },
  methods: {
    handleSubmition () {
      CheckoutInformation.setUserData({
        name: this.name,
        surname: this.surname,
        cardNumber: this.cardNumber,
        securityNumber: this.securityNumber,
        date: this.date
      })
    }
  }
}
</script>

<style>

</style>