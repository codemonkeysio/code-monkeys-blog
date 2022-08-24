<template>
  <div v-if="prevButton">
    <vp-icon name="leftArrow" class="left-arrow"></vp-icon>Prev
  </div>
  <div v-else>
    Next<vp-icon name="rightArrow" class="right-arrow"></vp-icon>
  </div>
</template>

<script>
export default {
  name: 'PaginationButtons',
  props: {
    prevButton: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.left-arrow
    padding-right: 0.25rem
.right-arrow
    padding-left: 0.25rem
</style>
