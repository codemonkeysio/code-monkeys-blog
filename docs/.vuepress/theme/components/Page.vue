<template>
  <main class="page">
    <div class="content-wrapper">
      <slot name="top" />

      <Content class="theme-default-content" />

      <PageNav v-bind="{ sidebarItems }" />

      <slot name="post-pagination" />

      <slot name="post-comments" />

      <slot name="bottom" />
    </div>
    <Footer />
  </main>
</template>

<script>
import PageNav from '@parent-theme/components/PageNav.vue';

export default {
  components: { PageNav },
  props: ['sidebarItems']
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
