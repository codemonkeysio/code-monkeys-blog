<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="close" @click="$emit('close-modal')">
        <vp-icon class="icon" name="cross"></vp-icon>
      </div>
      <h4 class="name">{{ title }}</h4>
      <img class="qr-code" :src="$withBase(`/images/donate/qr-codes/${qrCode}`)" :alt="qrCodeAlt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
   title: {
    type: String,
    required: false,
    default: "Donation"
   },
   qrCode: {
    type: String,
    required: true,
    default: null
   },
   qrCodeAlt: {
    type: String,
    required: false,
    default: "Donation QR Code"
   }
  }
}
</script>

<style lang="stylus" scoped>
.modal-overlay
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  z-index: 10
  background-color: #0b0c0f8c
  .modal
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    border-radius: 1.875rem
    background-color: $backgroundColor
    .close
      align-self: flex-end
      cursor: pointer
      .icon
        width 1.125rem
        height 1.125rem
        transition: 0.3s ease
      .icon:hover
        color: $accentColor
    .name
      margin-top: 0
      margin-bottom: 1.25rem

@media (max-width: 21.8125rem)
  .modal-overlay
    .modal
      width: 12.5rem
      height: 12.5rem
      padding: 1rem
      .qr-code
        width: 8.375rem

@media (min-width: 21.875rem)
  .modal-overlay
    .modal
      width: 14.0625rem
      height: 14.0625rem
      padding: 1rem
      .qr-code
        width: 9.875rem

@media (min-width: 23.4375rem)
  .modal-overlay
    .modal
      width: 15.625rem
      height: 15.625rem
      padding: 1.125rem
      .qr-code
        width: 11.375rem

@media (min-width: 40.625rem)
  .modal-overlay
    .modal
      width: 18.75rem
      height: 18.75rem
      padding: 1.25rem
      .qr-code
        width: 14.375rem

@media (min-width: 53.125rem)
  .modal-overlay
    .modal
      width: 21.875rem
      height: 21.875rem
      padding: 1.375rem
      .qr-code
        width: 17.375rem

@media (min-width: 59.9375rem)
  .modal-overlay
    .modal
      width: 25rem
      height: 25rem
      padding: 1.5rem
      .qr-code
        width: 20.25rem
</style>
