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
  name: 'Pagination',

  props: {
    prevLink: {
      default: null,
      required: true
    },
    nextLink: {
      default: null,
      required: true
    }
  }
};
</script>
