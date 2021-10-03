<template>
  <Layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1 v-if="!allPosts()">
          {{ $pagination.pages[0].frontmatter.topicDescription }}
          <div class="emoji-wrap">
            {{ $pagination.pages[0].frontmatter.topicDescriptionEmojiWrap }}
          </div>
        </h1>
        <h1 v-else>
          The Scribblings of a
          <div class="emoji-wrap">Monkey!!! 📝🐒</div>
        </h1>
        <div
          class="post-card"
          @click="
            $router.push(`${post.path}`).catch((err) => {
              if (
                err.name !== 'NavigationDuplicated' &&
                !err.message.includes(
                  'Avoided redundant navigation to current location'
                )
              ) {
                console.log(err);
              }
            })
          "
          :key="post.key"
          v-for="post in $pagination.pages"
        >
          <div class="post-title-and-summary">
            <h2 class="title">
              {{ post.title }}
            </h2>
            <PostDetails
              :author="post.frontmatter.author"
              :posted="post.frontmatter.date"
              :updated="post.lastUpdated"
            />
            <p class="preview">
              {{ post.frontmatter.description }}
            </p>
          </div>
          <div class="post-pic">
            <img
              :src="require(`../../public/images/${post.frontmatter.img}`)"
              alt="Post Pic"
            />
          </div>
        </div>
        <PaginationButtons
          :pagination="{
            prevLink: $pagination.prevLink,
            nextLink: $pagination.nextLink
          }"
        />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from './Layout.vue';

export default {
  components: {
    Layout
  },

  methods: {
    allPosts() {
      return this.$route.path.includes('/posts/');
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler() {
        if (this.$route.path.includes('/topics/')) {
          sessionStorage.setItem('allPosts', 'false');
        } else {
          sessionStorage.setItem('allPosts', 'true');
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-default-content
  padding-bottom: 0
  .post-card
    display: flex
    align-items: center
    margin-top: 3.5rem
    padding: 0 2rem
    border: 0.125rem solid #16181d
    border-radius: 1.875rem
    box-shadow: 0 0.5rem 1rem 0 #16181d
    transition: 0.2s
    background-image: radial-gradient(circle at center center, #2c303a, #1f2229)
    cursor: pointer
    .post-title-and-summary
      flex: 8.5
      .title
        font-weight: 500
        color: $accentColor
        margin: 1.875rem 0 1.5rem 0
      .title:hover
        text-decoration: underline
      .preview
        margin-top: 1rem
    .post-pic
      flex: 1.5
      padding-top: 1.125rem
      padding-left: 1.125rem
      padding-bottom: 1.125rem
      transition: transform 0.2s;
  .post-card:hover
    box-shadow: 0.125rem 0.5rem 1rem 0.125rem #0b0c0f
    .post-pic
      transform: scale(1.1);

@media (max-width: 54.6875rem)
  .post-card
    flex-direction: column-reverse
    .title
      margin: 0
    .preview
      text-align: center
      margin-top: 0.5rem
      margin-bottom: 1.25rem
    .post-pic
      padding-top: 1.25rem 0 0.875rem 0
</style>
