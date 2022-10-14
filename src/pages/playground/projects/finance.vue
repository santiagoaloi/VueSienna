<template>
  <VContainer class="ma-15">
    <VAutocomplete
      item-title="method"
      iten-value="id"
      :items="allowedPaymentMethods"
      attach
    >
    </VAutocomplete>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: 'Playground',
})

const paymentMethods = reactive([
  { uid: 1, method: 'cash' },
  { uid: 2, method: 'credit-card' },
  { uid: 3, method: 'checking-account' },
])

const customer = reactive({
  uid: 1,
  firstName: 'Santi',
  lastName: 'Aloi',

  finance: {
    get allowedPaymentMethods() {
      return buildPaymentMethods(this)
    },
    checkingAccount: {
      accountId: 25,
      creditLimit: 5000,
      balance: 5000,
      get limitReached() {
        return this.creditLimit === this.balance
      },
    },
  },
})

function buildPaymentMethods(ctx) {
  const { limitReached } = ctx.checkingAccount

  //Flat payment-methods into just method names.
  const methods = paymentMethods.flatMap(m => m.method)

  //Check if credit limit is reached and remove that payment-method.
  if (limitReached) {
    return methods.filter(remove => remove !== 'checking-account')
  }
  return [...methods]
}

const allowedPaymentMethods = computed(
  () => customer.finance.allowedPaymentMethods
)
</script>
