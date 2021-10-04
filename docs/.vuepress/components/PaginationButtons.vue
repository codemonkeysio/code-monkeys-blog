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
      prevLink: null,
      nextLink: null
    };
  },

  created() {
    console.log('this.$route.name before', this.$route.name);
    console.log('this.pageKey before', this.pageKey);
    this.$router.onReady(() => {
      console.log('this.$route.name', this.$route.name);
      console.log('this.pageKey', this.pageKey);
      if (this.$route.name === this.pageKey) {
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
    });
  }
};
</script>
