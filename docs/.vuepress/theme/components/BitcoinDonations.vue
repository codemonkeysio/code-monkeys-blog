<template>
  <div class="bitcoin-addresses-wrapper">
    <div class="address" v-for="(address, index) in bitcoinAddresses" :key="address.name">
      <div class="logo">
        <v-lazy-image
          :src="$withBase(`/images/${address.logo}`)"
          :alt="address.alt || 'Donation Logo'"
        />
      </div>
      <div class="name-and-abbreviation">
        <span>{{ address.name }}</span>
        <span class="abbreviation">{{ address.abbr }}</span>
      </div>
      <div class="address-wrapper">
        <span class="left-address">{{
          formattedAddresses[index].leftPart
        }}</span>
        <span class="right-address">{{
          formattedAddresses[index].rightPart
        }}</span>
      </div>
      <button
        type="button"
        v-clipboard:copy="address.address"
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
import bitcoinAddresses from '../../data/donations/bitcoin-addresses'

export default {
  name: 'BitcoinDonations',

  components: {
    VLazyImage
  },

  data() {
    return {
      bitcoinAddresses: bitcoinAddresses.bitcoinAddresses,
      formattedAddresses: []
    }
  },

  created() {
    this.formatAddress(this.bitcoinAddresses)
  },

  methods: {
    onCopy(e) {
      alert(`Address:\n\n${e.text}\n\ncopied to clipboard!`)
    },
    onError(e) {
      alert('Failed copying address to clipboard: ', e)
    },
    formatAddress(bitcoinAddresses) {
      let addressLength
      let rightPartStart
      bitcoinAddresses.forEach(address => {
        addressLength = address.address.length
        rightPartStart = addressLength - 10
        this.formattedAddresses.push({
          leftPart: address.address.slice(0, rightPartStart),
          rightPart: address.address.slice(rightPartStart, addressLength)
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.bitcoin-addresses-wrapper
  border-top: 0.0625rem solid #424857
  padding-top: 1.25rem
  margin-bottom: 1.875rem
  .address
    display: flex
    flex-wrap: wrap
    align-items: center
    padding-bottom: 1.25rem
    margin-bottom: 1.25rem
    border-bottom: 0.0625rem solid #424857
    .logo
      max-width: 3.125rem
      max-height: 3.125rem
    .name-and-abbreviation
      display: flex
      flex-direction: column
      min-height: 3.125rem
      margin-left: 1.25rem
      margin-right: 1.25rem
    .address-wrapper
      display: flex
      flex: 7.75
      min-height: 2.875rem
      padding: 0 1.25rem
      border: 0.125rem solid $darkBorderColor
      user-select: none
      .left-address
        align-self: center
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .right-address
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
  .bitcoin-addresses-wrapper
    .address
      .name-and-abbreviation
        min-width: 6.25rem
      .address-wrapper
        min-width: 9.5rem
        margin-top: 1.25rem
        border-radius: 0.625rem
      button
        min-width: 9.5rem
        margin-top: 1.25rem
        border-radius: 0.625rem

@media (min-width: 26.375rem)
  .bitcoin-addresses-wrapper
    .address
      .name-and-abbreviation
        min-width: 11.3125rem
      .address-wrapper
        min-width: 15rem
        margin-top: 1.25rem
        border-radius: 0.625rem
      button
        min-width: 16.9375rem
        margin-top: 1.25rem
        border-radius: 0.625rem

@media (min-width: 42.9375rem)
  .bitcoin-addresses-wrapper
    .address
      .name-and-abbreviation
        min-width: 6.375rem
      .address-wrapper
        min-width: 15.375rem
        margin-top: 0
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
  .bitcoin-addresses-wrapper
    .address
      .name-and-abbreviation
        min-width: 16.625rem
      .address-wrapper
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
  .bitcoin-addresses-wrapper
    .address
      .name-and-abbreviation
        min-width: 6.6875rem
      .address-wrapper
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
