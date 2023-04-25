<template>
  <div class="crypto-donations-wrapper">
    <div
      class="donation"
      v-for="(donation, index) in cryptoDonations"
      :key="donation.name"
    >
      <div class="logo-name-and-abbreviation-wrapper">
        <div class="logo">
          <v-lazy-image
            :src="$withBase(`/images/${donation.logo}`)"
            :src-placeholder="$withBase(`/images/${donation.placeholder}`)"
            :alt="donation.alt || 'Donation Logo'"
          />
        </div>
        <div class="name-and-abbreviation">
          <span>{{ donation.name }}</span>
          <span class="abbreviation">{{ donation.abbr }}</span>
        </div>
      </div>
      <div class="address-break"></div>
      <div class="address-wrapper">
        <span class="left-address">{{
          formattedAddresses[index].leftPart
        }}</span>
        <span class="right-address">{{
          formattedAddresses[index].rightPart
        }}</span>
      </div>
      <div class="copy-and-qr-code-break"></div>
      <div class="copy-and-qr-code-wrapper">
        <button
          class="copy"
          type="button"
          v-clipboard:copy="donation.address"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          Copy
        </button>
        <button class="qr-code" type="button" @click="displayQRCode(index)">
          <vp-icon name="qr-code"></vp-icon>
        </button>
      </div>
      <Modal
        v-show="donation.showQRCode"
        @close-modal="donation.showQRCode = false"
        :title="donation.name"
        :qrCode="donation.qrCode"
        :qrCodeAlt="donation.qrCodeAlt"
      />
    </div>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';
import cryptoDonations from '../../data/donations/crypto-donations';
import Modal from './Modal.vue';

export default {
  name: 'cryptoDonations',

  components: {
    VLazyImage,
    Modal
  },

  data() {
    return {
      cryptoDonations: cryptoDonations.cryptoDonations,
      formattedAddresses: []
    };
  },

  created() {
    this.formatAddress(this.cryptoDonations);
  },

  methods: {
    onCopy(e) {
      alert(`Address:\n\n${e.text}\n\ncopied to clipboard!`);
    },
    onError(e) {
      alert('Failed copying address to clipboard: ', e);
    },
    formatAddress(cryptoDonations) {
      let addressLength;
      let rightPartStart;
      cryptoDonations.forEach((donation) => {
        addressLength = donation.address.length;
        rightPartStart = addressLength - 10;
        this.formattedAddresses.push({
          leftPart: donation.address.slice(0, rightPartStart),
          rightPart: donation.address.slice(rightPartStart, addressLength)
        });
      });
    },
    displayQRCode(index) {
      this.cryptoDonations[index].showQRCode = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
.crypto-donations-wrapper
  padding-top: 1.25rem
  .donation
    display: flex
    flex-wrap: wrap
    align-items: center
    padding-bottom: 1.25rem
    .logo-name-and-abbreviation-wrapper
      display: flex
      align-items: center
      width: 8.125rem
      margin-right: 4.1875rem
      .logo
        min-width: 3.125rem
        width: 3.125rem
        .v-lazy-image
          filter: blur(0.1125rem)
          will-change: filter
          width: 100%
        .v-lazy-image-loaded
          transition: filter 0.7s
          filter: blur(0)
      .name-and-abbreviation
        margin-left: 1.25rem
    .address-break
      flex-basis: 100%
    .address-wrapper
      display: flex
      flex: 7.75
      margin-top: 1.25rem
      min-height: 2.875rem
      min-width: 9.5rem
      padding: 0 1.25rem
      user-select: none
      border: 0.125rem solid $darkBorderColor
      border-radius: 0.625rem
      .left-address
        align-self: center
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .right-address
        align-self: center
        flex-shrink: 0
    .copy-and-qr-code-break
      flex-basis: 100%
    .copy-and-qr-code-wrapper
      display: flex
      flex: 2.25
      .copy
        flex-basis: 6.25rem
        margin-top: 1.25rem
        height: 3.125rem
        padding: 0 0.75rem
        color: $textColor
        background-color: inherit
        cursor: pointer
        transition: 0.3s ease
        border: 0.125rem solid $darkBorderColor
        border-radius: 0.625rem 0 0 0.625rem
      .copy:hover
        background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColorTwo)
        color: $accentColor
      .qr-code
        flex-basis: 5rem
        margin-top: 1.25rem
        display: flex
        align-items: center
        height: 3.125rem
        padding: 0 0.125rem
        color: $textColor
        background-color: inherit
        cursor: pointer
        transition: 0.3s ease
        svg
          width: 100%
          height: 67%
        border: 0.125rem solid $darkBorderColor
        border-left-width: 0
        border-radius: 0 0.625rem 0.625rem 0
      .qr-code:hover
        background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColorTwo)
        color: $accentColor
  .donation:nth-child(n+2)
    padding-top: 1.25rem
  .donation:not(:last-child)
    border-bottom: 0.0625rem solid #424857

@media (min-width: 39.25rem)
  .crypto-donations-wrapper
    .donation
      .address-wrapper
        border-top-right-radius: 0
        border-bottom-right-radius: 0
      .copy-and-qr-code-break
        flex-basis: 0
      .copy-and-qr-code-wrapper
        .copy
          min-width: 6.25rem
          border-left-width: 0
          border-top-left-radius: 0
          border-bottom-left-radius: 0
        .qr-code
          min-width: 5rem

@media (min-width: 40.375rem)
  .crypto-donations-wrapper
    .donation
      .address-break
        flex-basis: 0
      .address-wrapper
        margin-top: 0
        border-top-right-radius: 0.625rem
        border-bottom-right-radius: 0.625rem
      .copy-and-qr-code-break
        flex-basis: 100%
      .copy-and-qr-code-wrapper
        justify-content: flex-end
        .copy
          border-left-width: 0.125rem
          border-top-left-radius: 0.625rem
          border-bottom-left-radius: 0.625rem

@media (min-width: 52.125rem)
  .crypto-donations-wrapper
    .donation
      .address-wrapper
        border-top-right-radius: 0
        border-bottom-right-radius: 0
      .copy-and-qr-code-break
        flex-basis: 0
      .copy-and-qr-code-wrapper
        .copy
          margin-top: 0
          border-left-width: 0
          border-top-left-radius: 0
          border-bottom-left-radius: 0
        .qr-code
          margin-top: 0
          border-left-width: 0

@media (min-width: 53.1875rem)
  .crypto-donations-wrapper
    .donation
      .address-break
        flex-basis: 100%
      .address-wrapper
        margin-top: 1.25rem
        border-top-right-radius: 0
        border-bottom-right-radius: 0
      .copy-and-qr-code-break
        flex-basis: 0
      .copy-and-qr-code-wrapper
        .copy
          margin-top: 1.25rem
          border-left-width: 0
          border-top-left-radius: 0
          border-bottom-left-radius: 0
        .qr-code
          margin-top: 1.25rem

@media (min-width: 63rem)
  .crypto-donations-wrapper
    .donation
      .address-break
        flex-basis: 0
      .address-wrapper
        margin-top: 0
        border-top-right-radius: 0.625rem
        border-bottom-right-radius: 0.625rem
      .copy-and-qr-code-break
        flex-basis: 100%
      .copy-and-qr-code-wrapper
        justify-content: flex-end
        .copy
          border-left-width: 0.125rem
          border-top-left-radius: 0.625rem
          border-bottom-left-radius: 0.625rem

@media (min-width: 74.25rem)
  .crypto-donations-wrapper
    .donation
      .address-wrapper
        border-top-right-radius: 0
        border-bottom-right-radius: 0
      .copy-and-qr-code-break
        flex-basis: 0
      .copy-and-qr-code-wrapper
        .copy
          margin-top: 0
          border-left-width: 0
          border-top-left-radius: 0
          border-bottom-left-radius: 0
        .qr-code
          margin-top: 0
</style>
