<template>
  <v-divider></v-divider>
  <v-container fluid>
    <v-alert
      title="Standard Account"
      icon="mdi-bank"
      border="start"
      border-color="deep-purple accent-4"
      elevation="2"
      color="#2e3640"
    >
      <h4 class="pl-1">includes the following benefits</h4>
      <v-list
        :items="[
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
        ]"
        item-props
        bgColor="transparent"
      >
      </v-list>

      <v-checkbox v-model="terms" label="Accepts terms and conditions.">
      </v-checkbox>

      <div>
        <v-btn
          @click="createAccount()"
          :disabled="!terms"
          color="deep-purple"
          class="text-white ml-4"
          size="small"
          >Continue with application</v-btn
        >
      </div>
    </v-alert>
  </v-container>
</template>

<script setup>
const terms = $ref(false)

const newAccountObject = {
  fistName: '',
  lastName: '',
  services: [
    {
      serviceType: 'credit-card',
      cards: [buildCreditCards()],
    },
    // {
    //   serviceType: 'debit-card',
    //   cards: [
    //     {
    //       provider: 'visa',
    //       balance: 0,
    //     },
    //   ],
    // },
    // {
    //   serviceType: 'checking-account',
    //   cards: [
    //     {
    //       provider: 'skriptag-bank',
    //       balance: -5000,
    //       overDraftLimit: 5000,
    //       get limitReached() {
    //         return Math.abs(this.balance) >= this.overDraftLimit
    //       },
    //     },
    //   ],
    // },
  ],
}

function buildCreditCards() {
  return {
    provider: 'Visa',
    limit: 5000,
    balance: 0,
    get limitReached() {
      return this.limit === this.balance
    },
    get credtAvailable() {
      return this.limit - this.balance
    },
  }
}

function createAccount() {
  const newAccount = Object.create(newAccountObject)
}
</script>
<route lang="yaml">
meta:
  layout: secure
  requiresAuth: true
</route>
