<template>
  <main class="page">
    <div class="content-wrapper">
      <slot name="top" />

      <Content class="theme-default-content" />
      <PageEdit />

      <PageNav v-bind="{ sidebarItems }" />

      <slot name="bottom" />
    </div>

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
        <a href="https://www.patreon.com/codemonkeys"
          ><vp-icon name="Patreon" class="icon"></vp-icon
        ></a>
      </div>
      <div>Made by & for Code Monkeys 🐵</div>
    </footer>
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue';
import PageNav from '@parent-theme/components/PageNav.vue';

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
