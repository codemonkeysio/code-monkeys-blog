<template>
  <Layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>
          {{ $pagination.pages[0].frontmatter.topicDescription }}
        </h1>
        <div
          class="post-card"
          :key="post.key"
          v-for="post in $pagination.pages"
        >
          <div class="post-title-and-summary">
            <h2>
              <router-link :to="post.path">
                {{ post.title }}
              </router-link>
            </h2>
            <p>
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
        <div id="pagination">
          <div>
            <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink"
              >Prev</router-link
            >
          </div>
          <div>
            <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink"
              >Next</router-link
            >
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@parent-theme/layouts/Layout.vue';

export default {
  components: {
    Layout
  }
};
</script>

<style lang="stylus" scoped>
h2
  margin 1.875rem 0

.post-card
  display flex
  align-items center
  margin-top 3.5rem
  padding 0 2rem
  border 0.125rem solid #16181d
  border-radius 1.875rem
  box-shadow 0 0.5rem 1rem 0 #16181d
  transition 0.2s
  background-image radial-gradient(circle at center center, #2c303a, #1f2229)
  .post-title-and-summary
    flex 8.5
  .post-pic
    flex 1.5
    padding-top 1.125rem
    padding-left 1.125rem
    padding-bottom 1.125rem
.post-card:hover
  box-shadow 0.125rem 0.5rem 1rem 0.125rem #0b0c0f

#pagination
  display flex
  justify-content space-between
  padding-top 2.719rem
</style>
