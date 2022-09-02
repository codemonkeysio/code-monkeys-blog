<template>
  <main class="page">
    <slot name="top" />

    <Content slot-key="header" class="theme-default-content" />

    <slot name="post-details" />

    <slot name="embedded-video" />

    <Content class="theme-default-content" />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="post-pagination" />

    <slot name="post-comments" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageNav from '@parent-theme/components/PageNav.vue'

export default {
  components: { PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
