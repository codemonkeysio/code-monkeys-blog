<template>
  <div id="pagination">
    <div>
      <a v-if="prevLink" :href="prevLink">
        <vp-icon name="leftArrow" class="left-arrow"></vp-icon>Prev
      </a>
    </div>
    <div>
      <a v-if="nextLink" :href="nextLink">
        Next<vp-icon name="rightArrow" class="right-arrow"></vp-icon>
      </a>
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
