<template>
  <main class="page">
    <div class="content-wrapper">
      <slot name="top" />

      <Content class="theme-default-content" />
      <PageEdit />

      <PageNav v-bind="{ sidebarItems }" />

      <slot name="bottom" />
    </div>
    <Footer />
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue';
import PageNav from '@parent-theme/components/PageNav.vue';
import Footer from '../../components/Footer.vue';

export default {
  components: { PageEdit, PageNav, Footer },
  props: ['sidebarItems']
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
