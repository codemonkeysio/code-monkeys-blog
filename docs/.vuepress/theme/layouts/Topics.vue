<template>
  <Layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>👋 Hey Start Monkeying Around!!!</h1>
        <div
          class="topic-card"
          @click="handleNavigation(topic)"
          :key="topic.name"
          v-for="(topic, index) in topicsList"
        >
          <div class="title-and-summary">
            <div class="title-wrapper">
              <h2 class="title">{{ topicDetails[index].title }}</h2>
              <h2 class="number-of-posts">({{ topic.pages.length }})</h2>
            </div>
            <p>
              {{ topicDetails[index].summary }}
            </p>
          </div>
          <div class="logo">
            <v-lazy-image
              :src="$withBase(`/images/${topicDetails[index].logo}`)"
              :src-placeholder="
                $withBase(`/images/${topicDetails[index].placeholder}`)
              "
              :alt="topicDetails[index].alt"
            />
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import VLazyImage from 'v-lazy-image/v2/v-lazy-image.es.js';
import Layout from './Layout.vue';

export default {
  components: {
    VLazyImage,
    Layout
  },

  data() {
    return {
      topicsList: []
    };
  },

  created() {
    this.topicsList = this.$topics.list;
    this.topicsList.sort((a, b) => (a.name > b.name ? 1 : -1));
  },

  computed: {
    topicDetails() {
      const topicsPage = this.$site.pages.filter(
        (page) => page.path === '/topics/'
      );
      return topicsPage[0].frontmatter.topicDetails;
    }
  },
  methods: {
    handleNavigation(topic) {
      this.$router.push(`${topic.path}`).catch((err) => {
        if (
          err.name !== 'NavigationDuplicated' &&
          !err.message.includes(
            'Avoided redundant navigation to current location'
          )
        ) {
          console.log(err);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-default-content
  padding-bottom: 0
  .topic-card
    display: flex
    align-items: center
    border: 0.125rem solid $darkBorderColor
    box-shadow: 0 0.5rem 1rem 0 $darkBorderColor
    transition: 0.2s
    border-radius: 1.875rem
    margin-top: 3.5rem
    padding: 0 2rem
    background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColor)
    cursor: pointer
    .title-and-summary
      flex: 8.5
      .title-wrapper
        display: flex
        color: $accentColor
        border-bottom: 0.125rem solid $borderColor
        margin: 1.875rem 0 1.5rem 0
        .title
          border-bottom: 0
          margin: 0 0.5rem 0 0
        .title:hover
          text-decoration: underline
        .number-of-posts
          border-bottom: 0
          margin: 0
    .logo
      flex: 1.5
      padding-top: 1.125rem
      padding-left: 1.125rem
      padding-bottom: 1.125rem
      transition: transform 0.2s
      .v-lazy-image
        filter: blur(0.375rem)
        will-change: filter
        width: 100%
      .v-lazy-image-loaded
        transition: filter 0.7s
        filter: blur(0)
  .topic-card:hover
    box-shadow: 0.125rem 0.5rem 1rem 0.125rem $darkBoxShadowColor
    .logo
      transform: scale(1.1)

@media (max-width: 61.25rem)
  .theme-default-content
    .topic-card
      flex-direction: column-reverse
      .title-and-summary
        .title-wrapper
          justify-content: center
          margin: 0
        p
          text-align: center
          margin-top: 0.875rem
          margin-bottom: 1.25rem
      .logo
        padding: 1.25rem 0 0.875rem 0
        width: 9.6875rem
</style>
