<template>
  <footer class="footer">
    <div class="icons">
      <div class="no-wrap-icons">
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
      </div>
      <div class="wrap-icons">
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
    </div>
    <p class="made-by">
      Made by & for Code <span class="emoji-wrap">Monkeys 🐵</span>
    </p>
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
    display: flex
    flex-direction: row
    margin-bottom 1.75rem
    min-width 12.5rem
  .no-wrap-icons
    display: inline-flex
  .wrap-icons
    display: inline-flex
  // .icon:hover
  //   color $accentColor
  .made-by
    text-align: center
    margin: 0

@media (max-width: 26.25rem)
  .icons
    flex-wrap: wrap
    justify-content: center
    .no-wrap-icons
      width: 100%
      justify-content: space-between
    .wrap-icons
      padding-top 1.75rem
</style>
