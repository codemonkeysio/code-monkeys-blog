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

  created() {
    console.log('this.pagination', this.pagination)
    const pageKey = this.pagination.pageKey;
    let links = {};
    if (typeof window !== `undefined`) {
      if (sessionStorage.getItem('allPosts') === 'false') {
        const topic = this.pagination.topic;
        links = this.$postPagination[topic][pageKey];
      } else {
        links = this.$postPagination.allPosts[pageKey];
      }

      this.prevLink = links.prevLink;
      this.nextLink = links.nextLink;

      console.log(this.prevLink, this.nextLink)
    }
  }
};
</script>
