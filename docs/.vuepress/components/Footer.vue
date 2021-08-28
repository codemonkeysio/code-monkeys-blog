<template>
  <footer class="footer">
    <div class="icons">
      <a
        href="https://github.com/codemonkeysio"
        target="_blank"
        rel="noopener noreferrer"
        ><vp-icon name="GitHub"></vp-icon
      ></a>
      <a
        href="https://www.youtube.com/channel/UCteut5f1PHW8vP29o66z-kg"
        target="_blank"
        rel="noopener noreferrer"
        ><vp-icon name="YouTube"></vp-icon
      ></a>
      <a
        href="https://discord.gg/mh9rQmwJ8H"
        target="_blank"
        rel="noopener noreferrer"
        ><vp-icon name="Discord"></vp-icon
      ></a>
      <a
        href="https://twitter.com/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
        ><vp-icon name="Twitter"></vp-icon
      ></a>
      <a
        href="https://www.linkedin.com/in/jason-chiarulli/"
        target="_blank"
        rel="noopener noreferrer"
        ><vp-icon name="LinkedIn"></vp-icon
      ></a>
      <a
        href="https://www.patreon.com/codemonkeys?fan_landing=true"
        target="_blank"
        rel="noopener noreferrer"
        ><vp-icon name="Patreon"></vp-icon
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
