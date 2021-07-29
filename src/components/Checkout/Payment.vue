<template>
  <form>
    <div class="container">
      <div class="columns">
        <div class="column">
          <b-field grouped group-multiline>
            <b-field label="Nome">
              <b-input
                v-model="clientData.name"
                type="text"
                placeholder="Seu nome"
              />
            </b-field>
            <b-field label="Sobrenome">
              <b-input
                v-model="clientData.surname"
                type="text"
                placeholder="Seu sobrenome"
              />
            </b-field>
          </b-field>
          <b-field
           grouped
           group-multiline
           v-if="clientData.paymentMethod == 'card'"
          >
            <b-field label="Número do cartão">
              <b-input
                v-model="clientData.cardNumber"
                type="text"
                placeholder="Número do cartão"
              />
            </b-field>
            <b-field label="Código de segurança">
              <b-input
                v-model="clientData.securityNumber"
                placeholder="CVV"
                type="text"
              />
            </b-field>
          </b-field>
          <b-field
            label="Data de vencimento"
            class="date-input"
            v-if="clientData.paymentMethod == 'card'"
          >
            <b-datepicker
                v-model="clientData.date"
                locale="pt-BR"
                icon="calendar-today"
                trap-focus
                open-on-focus
                placeholder="Data de vencimento"
              >
            </b-datepicker>
          </b-field>
        </div>
        <div class="column">
          <div class="produts">
            <div class="checkout-cart-container">
              <product-list />
            </div>
            <div class="proceed-to-payment">
              <b-button expanded native-type="submit" type="is-primary">Finalizar compra</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import CheckoutInformation from '@/components/Checkout/CheckoutInformation.js'
import ProductList from '@/components/ShoppingCart/ProductList'

export default {
  name: 'CheckoutPayment',
  data () {
    return {
      clientData: {
        name: '',
        surname: '',
        cardNumber: '',
        securityNumber: '',
        date: null,
        paymentMethod: undefined
      }
    }
  },
  components: {
    ProductList
  },
  created () {
    const data = CheckoutInformation.getUserData()
    if (Object.keys(data).length > 0) {
      this.clientData.name = data.name
      this.clientData.surname = data.surname
      this.clientData.cardNumber = data.cardNumber
      this.clientData.securityNumber = data.securityNumber
      this.clientData.date = data.date
      this.clientData.paymentMethod = data.paymentMethod
    }
  },
  watch: {
    clientData: {
      handler () {
        CheckoutInformation.setUserData({
          name: this.clientData.name,
          surname: this.clientData.surname,
          cardNumber: this.clientData.cardNumber,
          securityNumber: this.clientData.securityNumber,
          date: this.clientData.date
      })
      },
      deep: true
    }
  }
}
</script>

<style>
.date-input {
  width: 75%;
}
</style>