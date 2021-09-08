<template>
  <Layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>👋 Hey Start Monkeying Around!!!</h1>
        <div
          class="topic-card"
          @click="
            $router.push(`${topic.path}`).catch((err) => {
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
          :key="topic.name"
          v-for="(topic, index) in $topics.list"
        >
          <div class="title-and-summary">
            <h2>
              <router-link :to="topic.path">
                {{ topic.name }}
              </router-link>
            </h2>
            <p>
              {{ topicDetails[index].summary }}
            </p>
          </div>
          <div class="logo">
            <img-lazy
              :src="require(`../../public/images/${topicDetails[index].logo}`)"
              alt="Logo"
            />
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
  },

  computed: {
    topicDetails() {
      const topicsPage = this.$site.pages.filter(
        (page) => page.path === '/topics/'
      );
      return topicsPage[0].frontmatter.topicDetails;
    }
  }
};
</script>

<style lang="stylus" scoped>
h2
  margin: 1.875rem 0

.topic-card
  display: flex
  align-items: center
  border: 0.125rem solid #16181d
  box-shadow: 0 0.5rem 1rem 0 #16181d
  transition: 0.2s
  border-radius: 1.875rem
  margin-top: 3.5rem
  padding: 0 2rem
  background-image: radial-gradient(circle at center center, #2c303a, #1f2229)
  cursor: pointer
  .title-and-summary
    flex: 8.5
  .logo
    flex: 1.5
    padding-top: 1.125rem
    padding-left: 1.125rem
    padding-bottom: 1.125rem
    transition: transform 0.2s
.topic-card:hover
  box-shadow: 0.125rem 0.5rem 1rem 0.125rem #0b0c0f
  .logo
    transform: scale(1.1)

@media (max-width: 54.6875rem)
  h1
    text-align: center

  .topic-card
    flex-direction: column-reverse
    h2
      text-align: center
      margin: 0
    p
      text-align: center
      margin-top: 0.875rem
      margin-bottom: 1.25rem
    .logo
      padding-top: 1.25rem 0 0.875rem 0
      width: 9.6875rem
      height: 11.5625rem
</style>
