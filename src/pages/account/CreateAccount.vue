<template>
  <VDivider />
  <VContainer fluid>
    <VAlert
      title="Standard Account"
      icon="mdi-bank"
      border="start"
      border-color="deep-purple accent-4"
      elevation="2"
      color="#2e3640"
    >
      <h4 class="pl-1">This package Includes the following benefits</h4>
      <VList :items="services" item-props bgColor="transparent"> </VList>

      <VCheckbox v-model="terms" label="Accept terms and conditions." />

      <div>
        <VBtn
          @click="createAccount()"
          :disabled="!terms"
          color="deep-purple"
          class="text-white ml-4"
          size="small"
          >Continue with application</VBtn
        >
      </div>

      <div>
        <VBtn
          @click="saveAccount()"
          :disabled="!terms"
          color="deep-purple"
          class="text-white ml-4"
          size="small"
          >Save to firebase</VBtn
        >
      </div>
    </VAlert>
  </VContainer>
</template>

<script setup>
import { useAuthStore } from '@/stores/modules/authenticationStore'

const auth = useAuthStore()
const terms = $ref(false)

const services = $ref([
  {
    title: 'Credit Card',
    value: 'overview',
    prependIcon: 'mdi-bank',
    disabled: true,
  },
  {
    title: 'Debit Card',
    value: 'Accounts',
    to: '/dashboard/accounts',
    prependIcon: 'mdi-book-open-page-variant-outline',
    disabled: true,
  },
  {
    title: 'Checking account',
    value: 'Cards',
    to: '/dashboard/cards',
    prependIcon: 'mdi-credit-card-outline',
    disabled: true,
  },
  {
    title: 'Savings account',
    value: 'Cards',
    to: '/dashboard/cards',
    prependIcon: 'mdi-credit-card-outline',
    disabled: true,
  },
])

let newCustomer = $ref(null)

class Customer {
  constructor(
    firstName = '',
    lastName = '',
    services = { cards: [new CreditCard()] }
  ) {
    Object.assign(this, {
      firstName,
      lastName,
      services,
    })
  }
}

class CreditCard {
  constructor(provider = 'Visa', limit = 5000, balance = 0) {
    Object.assign(this, {
      provider,
      limit,
      balance,
      get limitReached() {
        return this.limit === this.balance
      },
      get creditAvailable() {
        return this.limit - this.balance
      },
    })
  }
}

function createAccount() {
  newCustomer = new Customer()
}

function saveAccount() {
  auth.saveAccount(newCustomer)
}
</script>
<route lang="yaml">
meta:
  layout: secure
  requiresAuth: true
</route>
