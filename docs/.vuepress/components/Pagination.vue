<template>
  <div id="pagination">
    <div>
      <div v-if="prevLink">
        <router-link :to="prevLink">
          <PaginationButtons :prevButton="true" />
        </router-link>
      </div>
    </div>
    <div>
      <div v-if="nextLink">
        <router-link :to="nextLink">
          <PaginationButtons />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

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
    };
  },

  created() {
    let links = {};
    if (typeof window !== `undefined`) {
      if (sessionStorage.getItem('allPosts') === 'false') {
        links = this.$postPagination[this.topic][this.pageKey];
      } else {
        links = this.$postPagination.allPosts[this.pageKey];
      }

      this.prevLink = links.prevLink;
      this.nextLink = links.nextLink;
    }
  }
};
</script>
