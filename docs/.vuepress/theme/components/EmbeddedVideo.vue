<template>
  <div class="video-wrapper">
    <iframe
      width="560"
      height="315"
      :src="videoURL"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'EmbeddedVideo',

  props: {
    videoURL: {
      type: String,
      default: '',
      required: false
    }
  }
};
</script>

<style lang="stylus" scoped>
@media (max-width: 39.9375rem)
  .video-wrapper
    position: relative
    padding-bottom: 56.25%
    height: 0
    iframe
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

@media (min-width: 40rem)
  iframe
    width: 35rem
    height: 19.6875rem

@media (max-width: 61.25rem)
  .video-wrapper
    text-align: center

@media (min-width: 61.3125rem)
  .video-wrapper
    position: relative
    padding-bottom: 19.6875rem
    text-align: left
    iframe
      position: absolute
      width: 100%
      height: 100%
      max-width: 35rem
      max-height: 19.6875rem
</style>
