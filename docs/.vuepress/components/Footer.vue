<template>
  <footer class="footer">
    <div class="icons">
      <a href="https://github.com/codemonkeysio"
        ><vp-icon name="GitHub" class="icon"></vp-icon
      ></a>
      <a href="https://www.youtube.com/channel/UCteut5f1PHW8vP29o66z-kg"
        ><vp-icon name="YouTube" class="icon"></vp-icon
      ></a>
      <a href="https://discord.gg/mh9rQmwJ8H"
        ><vp-icon name="Discord" class="icon"></vp-icon
      ></a>
      <a href="https://www.linkedin.com/in/jason-chiarulli-321358143/"
        ><vp-icon name="LinkedIn" class="icon"></vp-icon
      ></a>
      <a href="https://www.patreon.com/codemonkeys?fan_landing=true"
        ><vp-icon name="Patreon" class="icon"></vp-icon
      ></a>
    </div>
    <div>Made by & for Code Monkeys 🐵</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="stylus" scoped>
.footer
  display flex
  flex-direction column
  align-items center
  padding 2.5rem 2.5rem 2rem
  border-top 0
  color lighten($textColor, 25%)
  .icons
    display flex
    padding-bottom 1.75rem
    min-width 12.5rem
    /* .icon:hover
    color $accentColor */
</style>
