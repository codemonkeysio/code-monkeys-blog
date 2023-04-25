<template>
  <div class="post-details">
    <span class="author"> By: {{ author }} </span>
    <div class="posted-updated-wrapper">
      <span class="posted-wrapper">
        <span class="bullet">&#8226;</span
        ><span class="posted">Posted: {{ formatDate(posted) }}</span>
      </span>
      <span v-if="numberOfCommits > 1" class="updated-wrapper">
        <span class="bullet">&#8226;</span
        ><span class="updated">Updated: {{ formatDate(updated) }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../util';

export default {
  name: 'PostDetails',

  props: {
    author: {
      type: String,
      required: true
    },
    posted: {
      type: String,
      required: true
    },
    updated: {
      required: true
    },
    numberOfCommits: {
      required: true
    }
  },

  methods: {
    formatDate
  }
};
</script>

<style lang="stylus" scoped>
@import '~rfs/stylus'

.post-details
  display: flex
  flex-wrap: wrap
  font-style: italic
  color: #748e54
  margin-top: 0.625rem
  .author
    rfs-font-size(1.125rem)
    text-align: center
    margin-top: 0.25rem
    margin-right: 0.375rem
    line-height: 1.5
  .posted-updated-wrapper
    display: flex
    flex-wrap: wrap
    text-align: center
    .posted-wrapper
      margin-top: 0.25rem
    .updated-wrapper
      margin-top: 0.25rem
    .bullet, .posted, .updated
      rfs-font-size(1.125rem)
      line-height: 1.5
    .bullet, .posted
      margin-right: 0.375rem

@media (max-width: 61.25rem)
  .post-details
    justify-content: center
    .posted-updated-wrapper
      justify-content: center
</style>
