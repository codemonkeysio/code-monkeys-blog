<template>
  <div class="sidebar-button" @click="toggleSidebar">
    <vp-icon v-show="!showSideBar" class="icon" name="menu"></vp-icon>
    <vp-icon v-show="showSideBar" class="icon" name="cross"></vp-icon>
  </div>
</template>

<script>
export default {
  name: 'SidebarButton',

  data: function() {
    return {
      showSideBar: false
    };
  },
  methods: {
    toggleSidebar() {
      this.showSideBar = !this.showSideBar;
      this.$emit('toggle-sidebar');
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

@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
