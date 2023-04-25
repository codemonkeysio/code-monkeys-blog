<template>
  <div class="sidebar-button" @click="$emit('toggle-sidebar')">
    <vp-icon v-show="!value" class="icon" name="menu"></vp-icon>
    <vp-icon v-show="value" class="icon" name="cross"></vp-icon>
  </div>
</template>

<script>
export default {
  name: 'SidebarButton',

  props: {
    value: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 1.25rem
  height 1.25rem
  position absolute
  padding 0.6rem
  top 0.6rem
  left 1rem
  text-align center
  .icon
    display block
    width 1.5rem
    height 1.5rem

@media (max-width: 61.25rem)
  .sidebar-button
    display block
</style>
