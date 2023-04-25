<template>
  <div class="payment-codes-wrapper">
    <div class="paynym-bot-and-name">
      <div class="bot">
        <v-lazy-image
          :src="$withBase('/images/donate/logos/paynym-bot-300w.png')"
          :src-placeholder="
            $withBase('/images/donate/logos/paynym-bot-86w.png')
          "
          :alt="'Code Monkeys PayNym Bot'"
        />
      </div>
      <a
        class="name"
        href="https://paynym.is/+blackviolet838"
        target="_blank"
        rel="noopener noreferrer"
      >
        +blackviolet838
        <VueCustomTooltip
          label="Verified owner of this payment code"
          position="is-bottom"
        >
          <vp-icon name="verifiedUser"></vp-icon>
        </VueCustomTooltip>
      </a>
    </div>
    <div class="payment-code-wrapper">
      <div class="payment-code-text">
        <span>Payment Code</span>
      </div>
      <div class="payment-code-break"></div>
      <div class="payment-code">
        <span class="left-payment-code">{{
          formattedPaymentCode.leftPart
        }}</span>
        <span class="right-payment-code">{{
          formattedPaymentCode.rightPart
        }}</span>
      </div>
      <div class="copy-and-qr-code-break"></div>
      <div class="copy-and-qr-code-wrapper">
        <button
          class="copy"
          type="button"
          v-clipboard:copy="paymentCode"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          Copy
        </button>
        <button class="qr-code" type="button" @click="displayQRCode">
          <vp-icon name="qr-code"></vp-icon>
        </button>
      </div>
    </div>
    <Modal
      v-show="showModal"
      @close-modal="showModal = false"
      title="PayNym"
      qrCode="paynym-donation-qr-code.png"
      qrCodeAlt="PayNym Donation QR Code"
    />
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';
import Modal from './Modal.vue';

export default {
  name: 'PayNymDonation',

  components: {
    VLazyImage,
    Modal
  },

  data() {
    return {
      paymentCode:
        'PM8TJf7wdgnWbAdnwbgTMY8ic3UZ2LFvkSJxuFtK4JwXSKFmqys1iL964UX55fGKfqZXfTdVjK1Z3FwbgTPbmEp2ErGPVaXZds8v9YUBxgfqvoQUBF2X',
      formattedPaymentCode: { leftPart: '', rightPart: '' },
      showModal: false
    };
  },

  created() {
    this.formatPaymentCode(this.paymentCode);
  },

  methods: {
    onCopy(e) {
      alert(`Payment code:\n\n${e.text}\n\ncopied to clipboard!`);
    },
    onError(e) {
      alert('Failed copying payment code to clipboard: ', e);
    },
    formatPaymentCode(paymentCode) {
      const paymentCodeLength = paymentCode.length;
      const rightPartStart = paymentCodeLength - 10;
      this.formattedPaymentCode.leftPart = paymentCode.slice(0, rightPartStart);
      this.formattedPaymentCode.rightPart = paymentCode.slice(
        rightPartStart,
        paymentCodeLength
      );
    },
    displayQRCode() {
      this.showModal = true;
    }
  }
};
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
      width: 9.375rem
      height: 9.375rem
      margin-bottom: 1.25rem
      .v-lazy-image
        filter: blur(0.35625rem)
        will-change: filter
        width: 100%
      .v-lazy-image-loaded
        transition: filter 0.7s
        filter: blur(0)
      img
        border-radius: 50%
    .name
      rfs-font-size(1.5rem)
      margin-bottom: 1.25rem
    svg
      rfs-font-size(1.25rem)
  .payment-code-wrapper
    display: flex
    flex-wrap: wrap
    align-items: center
    padding-bottom: 1.25rem
    .payment-code-text
      display: flex
      align-items: center
      min-height: 3.125rem
      width: 8.125rem
      margin-right: 4.1875rem
    .payment-code-break
      flex-basis: 100%
    .payment-code
      display: flex
      flex: 7.75
      margin-top: 1.25rem
      min-height: 2.875rem
      min-width: 9.5rem
      padding: 0 1.25rem
      user-select: none
      border: 0.125rem solid $darkBorderColor
      border-radius: 0.625rem
      .left-payment-code
        align-self: center
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .right-payment-code
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

@media (min-width: 39.25rem)
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-code
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
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-code-break
        flex-basis: 0
      .payment-code
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
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-code
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
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-code-break
        flex-basis: 100%
      .payment-code
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
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-code-break
        flex-basis: 0
      .payment-code
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
  .payment-codes-wrapper
    .payment-code-wrapper
      .payment-code
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
