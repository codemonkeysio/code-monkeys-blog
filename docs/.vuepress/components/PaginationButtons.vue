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

  methods: {
    prevAndNextLink() {
      if (typeof window !== `undefined`) {
        if (sessionStorage.getItem('allPosts') === 'false') {
          return this.$postPagination[this.topic][this.pageKey];
        }

        return this.$postPagination.allPosts[this.pageKey];
      }
    }
  },

  computed: {
    prevLink: function() {
      return this.prevAndNextLink().prevLink;
    },
    nextLink: function() {
      return this.prevAndNextLink().nextLink;
    }
  }
};
</script>
