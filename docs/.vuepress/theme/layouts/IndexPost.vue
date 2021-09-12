<template>
  <Layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1 v-if="!$route.path.includes('/posts/')">
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
              ><vp-icon name="left-arrow" class="left-arrow"></vp-icon
              >Prev</router-link
            >
          </div>
          <div>
            <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink"
              >Next<vp-icon name="right-arrow" class="right-arrow"></vp-icon
            ></router-link>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from './Layout.vue';

export default {
  components: {
    Layout
  }
};
</script>

<style lang="stylus" scoped>
h2
  margin: 1.875rem 0

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

  #pagination
    display: flex
    justify-content: space-between
    padding-top: 2rem
    .left-arrow
      padding-right: 0.25rem
    .right-arrow
      padding-left: 0.25rem

@media (max-width: 54.6875rem)
  .post-card
    flex-direction: column-reverse
    h2
      margin: 0
    p
      text-align: center
      margin-top: 0.875rem
      margin-bottom: 1.25rem
    .post-pic
      padding-top: 1.25rem 0 0.875rem 0
</style>
