<template>
  <div class="payment-codes-wrapper">
    <div class="paynym-bot-and-name">
      <div class="bot">
        <v-lazy-image
          :src="$withBase('/images/donate/logos/paynym-bot.png')"
          :alt="'Code Monkeys PayNym Bot'"
        />
      </div>
      <a class="name" href="https://paynym.is/+blackviolet838" target="_blank" rel="noopener noreferrer">+blackviolet838</a>
    </div>
    <div class="payment-code-wrapper">
      <div class="payment-and-code-text">
        <span>Payment Code</span>
      </div>
      <div class="payment-code">
        <span class="left-payment-code">{{
          formattedPaymentCode.leftPart
        }}</span>
        <span class="right-payment-code">{{
          formattedPaymentCode.rightPart
        }}</span>
      </div>
      <button
        type="button"
        v-clipboard:copy="paymentCode"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js'

export default {
  name: 'PayNymDonation',

  components: {
    VLazyImage
  },

  data() {
    return {
      paymentCode: 'PM8TJf7wdgnWbAdnwbgTMY8ic3UZ2LFvkSJxuFtK4JwXSKFmqys1iL964UX55fGKfqZXfTdVjK1Z3FwbgTPbmEp2ErGPVaXZds8v9YUBxgfqvoQUBF2X',
      formattedPaymentCode: { leftPart: '', rightPart: '' }
    }
  },

  created() {
    this.formatPaymentCode(this.paymentCode)
  },

  methods: {
    onCopy(e) {
      alert(`Payment code:\n\n${e.text}\n\ncopied to clipboard!`)
    },
    onError(e) {
      alert('Failed copying payment code to clipboard: ', e)
    },
    formatPaymentCode(paymentCode) {
      const paymentCodeLength = paymentCode.length
      const rightPartStart = paymentCodeLength - 10
      this.formattedPaymentCode.leftPart = paymentCode.slice(0, rightPartStart)
      this.formattedPaymentCode.rightPart = paymentCode.slice(rightPartStart, paymentCodeLength)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~rfs/stylus'

.payment-codes-wrapper
  border-top: 0.0625rem solid #424857
  border-bottom: 0.0625rem solid #424857
  padding-top: 1.25rem
  .paynym-bot-and-name
    display: flex
    flex-direction: column
    align-items: center
    .bot
      max-width: 9.375rem
      max-height: 9.375rem
      margin-bottom: 1.25rem
      img
        border-radius: 50%
    .name
      rfs-font-size(1.5rem)
      margin-bottom: 1.25rem
  .payment-code-wrapper
    display: flex
    flex-wrap: wrap
    align-items: center
    padding-bottom: 1.25rem
    .payment-and-code-text
      display: flex
      align-items: center
      min-height: 3.125rem
    .payment-code
      display: flex
      flex: 7.75
      min-height: 2.875rem
      padding: 0 1.25rem
      border: 0.125rem solid $darkBorderColor
      user-select: none
      .left-payment-code
        align-self: center
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .right-payment-code
        align-self: center
        flex-shrink: 0
    button
      flex: 1
      min-height: 2.875rem
      padding: 0 0.75rem
      color: $textColor
      background-color: inherit
      border: 0.125rem solid $darkBorderColor
      cursor: pointer
      transition: 0.3s ease
    button:hover
      background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColorTwo)
      color: $accentColor

@media (max-width: 26.3125rem)
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-and-code-text
        min-width: 6.25rem
        margin-right: 1.55rem
      .payment-code
        min-width: 9.5rem
        border-radius: 0.625rem
      button
        min-width: 9.5rem
        margin-top: 1.25rem
        border-radius: 0.625rem

@media (min-width: 26.375rem)
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-and-code-text
        min-width: 11.3125rem
        margin-right: 5.565rem
      .payment-code
        min-width: 15rem
        border-radius: 0.625rem
      button
        min-width: 16.9375rem
        margin-top: 1.25rem
        border-radius: 0.625rem

@media (max-width: 42.875rem)
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-code
        margin-top: 1.25rem

@media (min-width: 42.9375rem)
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-and-code-text
        min-width: 6.375rem
        margin-right: 4.375rem
      .payment-code
        min-width: 15.375rem
        border-top-right-radius: 0
        border-bottom-right-radius: 0
      button
        align-self: stretch
        min-width: 4.5625rem
        border-left-width: 0
        margin-top: 0
        border-top-left-radius: 0
        border-bottom-left-radius: 0

@media (min-width: 53.1875rem)
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-and-code-text
        min-width: 16.625rem
        margin-right: 5.565rem
      .payment-code
        min-width: 19.8125rem
        margin-top: 1.25rem
        border-top-right-radius: 0.625rem
        border-bottom-right-radius: 0.625rem
      button
        min-width: 25.75rem
        margin-top: 1.25rem
        border-left-width: 0.125rem
        border-top-left-radius: 0.625rem
        border-bottom-left-radius: 0.625rem

@media (min-width: 74.0625rem)
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-and-code-text
        margin-right: 4.375rem
        min-width: 6.6875rem
      .payment-code
        min-width: 24rem
        margin-top: 0
        border-top-right-radius: 0
        border-bottom-right-radius: 0
      button
        min-width: 3.0625rem
        margin-top: 0
        border-left-width: 0
        border-top-left-radius: 0
        border-bottom-left-radius: 0
</style>

