<template>
  <div id="pagination">
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

  mounted() {
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
