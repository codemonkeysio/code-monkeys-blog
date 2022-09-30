<template>
  <div class="pagination">
    <div>
      <router-link v-if="prevLink" :to="prevLink">
        <PaginationButtons :prevButton="true" />
      </router-link>
    </div>
    <div>
      <router-link v-if="nextLink" :to="nextLink">
        <PaginationButtons />
      </router-link>
    </div>
  </div>
</template>

<script>
import PaginationButtons from './PaginationButtons'

export default {
  name: 'Pagination',

  components: {
    PaginationButtons
  },

  props: {
    pageKey: {
      type: String,
      default: '',
      required: true
    },
    topic: {
      type: String,
      default: '',
      required: true
    }
  },

  data() {
    return {
      prevLink: '',
      nextLink: ''
    }
  },

  mounted() {
    let links = {}
    if (typeof window !== `undefined`) {
      if (sessionStorage.getItem('allPosts') === 'false') {
        links = this.$postPagination[this.topic][this.pageKey]
      } else {
        links = this.$postPagination.allPosts[this.pageKey]
      }

      this.prevLink = links.prevLink
      this.nextLink = links.nextLink
    }
  }
}
</script>

<style lang="stylus" scoped>
.pagination
  max-width: 69.53125rem
  margin: 0 auto
  padding-left: 2.5rem
  padding-right: 2.5rem
  a:hover
    text-decoration: underline

@media (max-width: $MQNarrow)
  .pagination
    padding-left: 2rem
    padding-right: 2rem

@media (max-width: $MQMobileNarrow)
  .pagination
    padding-left: 1.5rem
    padding-right: 1.5rem
</style>
