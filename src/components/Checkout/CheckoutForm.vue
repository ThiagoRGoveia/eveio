<template>
  <div class="checkout-form">
    <b-field label="Método de pagamento">
      <b-select
        expanded
        :value="paymentMethod"
        @input="(value) => this.$emit('update:paymentMethod', value)"
        placeholder="Selecione"
      >
        <option value="card">Cartão de crédito</option>
        <option value="money">Dinheiro na entrega</option>
      </b-select>
    </b-field>

    <b-field
      label="Endereço de entrega"
      class="adress-input"
    >
      <b-input
        :value="address"
        @input="(value) => this.$emit('update:address', value)"
        placeholder="Nome da rua ou avenida"
        type="text"
      />
    </b-field>
    <b-field grouped group-multiline>
      <b-field
        label="Cidade"
      >
        <b-input
          :value="city"
          @input="(value) => this.$emit('update:city', value)"
          placeholder="Nome da cidade"
        />
      </b-field>
      <b-field
        label="UF"
      >
        <b-input
          :value="state"
          @input="(value) => this.$emit('update:state', value)"
          placeholder="Nome do estado"
        />
      </b-field>
    </b-field>
    <b-field
      label="CEP"
      class="cep-input"
    >
      <b-input
        :value="zipCode"
        @input="(value) => this.$emit('update:zipCode', value)"
        placeholder="CEP"
      />
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  props: ['paymentMethod', 'address', 'city', 'state', 'zipCode'],
}
</script>

<style>

.checkout-form {
  margin-left: 1rem;
}

.cep-input {
  width: 30%;
}


</style>