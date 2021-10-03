<template>
  <div id="pagination">
    <div>
      <router-link v-if="prevLink" :to="prevLink">
        <vp-icon name="leftArrow" class="left-arrow"></vp-icon>Prev
      </router-link>
    </div>
    <div>
      <router-link v-if="nextLink" :to="nextLink">
        Next<vp-icon name="rightArrow" class="right-arrow"></vp-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationButtons',

  props: {
    pagination: {
      type: Object,
      default() {
        return {};
      },
      required: true
    }
  },

  data() {
    return {
      prevLink: null,
      nextLink: null
    };
  },

  watch: {
    $route: {
      handler() {
        if (this.pagination.hasOwnProperty('prevLink')) {
          this.prevLink = this.pagination.prevLink;
          this.nextLink = this.pagination.nextLink;
        } else {
          const pageKey = this.pagination.pageKey;
          let links = {};
          if (window.sessionStorage.getItem('allPosts') === 'false') {
            const topic = this.pagination.topic;
            links = this.$postPagination[topic][pageKey];
          } else {
            links = this.$postPagination.allPosts[pageKey];
          }

          this.prevLink = links.prevLink;
          this.nextLink = links.nextLink;
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="stylus" scoped>
#pagination
  display: flex
  justify-content: space-between
  padding-top: 2rem
  .left-arrow
      padding-right: 0.25rem
  .right-arrow
      padding-left: 0.25rem
</style>
