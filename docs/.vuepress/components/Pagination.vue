<template>
  <div id="pagination">
    <div>
      <router-link v-if="hasPrev" :to="prevLink">
        <PaginationButtons :prevButton="true" />
      </router-link>
    </div>
    <div>
      <router-link v-if="hasNext" :to="nextLink">
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
      hasPrev: false,
      prevLink: '',
      hasNext: false,
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

      if (links.prevLink !== '') {
        this.hasPrev = true;
      }

      if (links.nextLink !== '') {
        this.hasNext = true;
      }

      this.prevLink = links.prevLink;
      this.nextLink = links.nextLink;
    }
  }
};
</script>
