<template>
  <Layout>
    <template #post-details>
      <div class="wrapper post-details-in-post">
        <PostDetails
          :key="$route.name"
          :pageKey="$page.key"
          :author="$frontmatter.author"
          :posted="$frontmatter.date"
          :updated="$page.lastUpdated"
          :numberOfCommits="$page.numberOfCommits"
        />
      </div>
    </template>
    <template #embedded-video>
      <div v-if="$frontmatter.videoURL" class="wrapper embedded-video">
        <EmbeddedVideo
          :key="$route.name"
          :pageKey="$page.key"
          :videoURL="$frontmatter.videoURL"
        />
      </div>
    </template>
    <template #post-pagination>
      <PostPagination
        :key="$route.name"
        :pageKey="$page.key"
        :topic="$frontmatter.topic"
      />
    </template>
    <template #post-comments>
      <div class="comments-wrapper">
        <Comment :key="$route.name" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from './Layout.vue';
import PostDetails from '../components/PostDetails';
import EmbeddedVideo from '../components/EmbeddedVideo';
import PostPagination from '../components/PostPagination';
import Comment from '@vuepress/plugin-blog/lib/client/components/Comment.vue';

export default {
  name: 'Post',

  components: {
    Layout,
    PostDetails,
    EmbeddedVideo,
    PostPagination,
    Comment
  }
};
</script>

<style lang="stylus">
@import '~rfs/stylus'
.wrapper
  max-width: 69.53125rem
  padding-left: 2.5rem
  padding-right: 2.5rem

@media (max-width: $MQNarrow)
  .wrapper
    padding-left: 2rem
    padding-right: 2rem

@media (max-width: $MQMobileNarrow)
  .wrapper
    padding-left: 1.5rem
    padding-right: 1.5rem

// Post Details
.post-details-in-post
  margin: 1.625rem auto 0

// Embedded Video
.embedded-video
  margin: 2rem auto 0

@media (max-width: $MQMobileNarrow)
  .embedded-video
    margin-top: 1.5rem

// Comments
.comments-wrapper
  padding: 2rem 2.5rem 0
  margin: 0 auto
  max-width: 69.53125rem
  div.vssue
    padding: 0
    .vssue-header
      display: flex
      justify-content: space-between
      align-items: center
      padding-bottom: 0.625rem
      line-height: 1.5
      border-bottom-width: 0.125rem
      margin-bottom: 0
    .vssue-body
      .vssue-new-comment
        margin: 1rem 0 1rem
        border-bottom-width: 0.125rem
        .vssue-comment-avatar
          display: flex
          width: 4.375rem
          height: 4.375rem
          img
            width: 4.375rem
            height: 4.375rem
            border-radius: 50%
          svg
            font-size: 4.375rem
            fill: #424857
        .vssue-new-comment-body
          display: flex
          margin-left: 4.375rem
          margin-bottom: 0.375rem
          .vssue-new-comment-input
            margin-left: 0.75rem
            border: 0.125rem solid $darkBorderColor
            background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColorTwo)
            rfs-font-size(1.25rem)
            color: $textColor
          .vssue-new-comment-input:disabled
            color: $disabledColor
          .vssue-new-comment-input:enabled::placeholder
            color: $textColor
          .vssue-new-comment-input:enabled:hover
            box-shadow: 0 0.25rem 0.25rem 0 $darkBorderColor
          .vssue-new-comment-input:focus
            box-shadow: 0 0.25rem 0.25rem 0 $darkBorderColor
        .vssue-new-comment-footer
          display: flex
          justify-content: center
          align-items: center
          margin: 0 0 1rem 5.125rem
          .vssue-current-user
            flex-grow: 1
            line-height: 1.5
            color: $textColor
            margin-top: 0.5rem
            text-align: left
            float: none
            .vssue-logout
              color: $disabledColor
              text-decoration: none
              font-weight: 500
            .vssue-logout:hover
              text-decoration: underline
          .vssue-new-comment-operations
            margin-top: 0.5rem
            .vssue-button
              transition: 0.3s ease
              border: 0.125rem solid $darkBorderColor
              color: $textColor
              font-weight: 500
              background-color: $backgroundColorTwo
            .vssue-button:hover
              background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColorTwo)
              color: $accentColor
            .vssue-button:disabled
              color: $disabledColor
            .vssue-button:disabled:hover
              background-image: none
      .vssue-status
        padding: 0
        .vssue-icon
          rfs-font-size(1.75rem)
        .vssue-status-info
          margin-top: 0.625rem
          margin-bottom: 0
          line-height: 1.5
      .vssue-notice
        .vssue-alert
          rfs-font-size(1.25rem)
          text-align: center
          border-color: $darkBorderColor
          background-image: radial-gradient(circle at center center, $backgroundColorThree, $backgroundColorTwo)
          box-shadow: 0 0.25rem 0.25rem 0 $darkBorderColor
      .vssue-comments
        .vssue-pagination
          color: $textColor
          padding: 0
          margin-top: 1rem
          .vssue-pagination-select
            rfs-font-size(1.0625rem)
            font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
            color: $textColor
            padding: 0.3125rem 1.5rem 0rem 0.3125rem
            width: auto
            margin: 0
            border: 0.125rem solid $darkBorderColor
            border-radius: 0.3125rem
            -moz-appearance: none
            -webkit-appearance: none
            appearance: none
            background-color: $backgroundColorTwo
            background-image: url("../../../icons/arrowDown.svg"),
              linear-gradient(180deg, $backgroundColorFour, $backgroundColorTwo)
            background-repeat: no-repeat
            background-position: right 0.35em top 60%, 0 0
            background-size: 0.7em auto, 100%
          .vssue-pagination-select::-ms-expand
            display: none
          .vssue-pagination-select:hover
            box-shadow: 0 0 0.125rem 0.125rem $darkBorderColor
          .vssue-pagination-select:focus
            box-shadow: 0 0 0.125rem 0.125rem $darkBorderColor
            outline: none
          .vssue-pagination-select:disabled
            box-shadow: none
          .vssue-pagination-per-page
            flex: 2
            span
              padding-left: 0.25rem
            .vssue-pagination-link
              rfs-font-size(1.375rem)
        .vssue-comment:not(:last-child)
          margin: 1rem 0 2rem
        .vssue-comment:last-child
          margin: 1rem 0 0
        .vssue-comment
          .vssue-comment-avatar
            img
              border-radius: 50%
          .vssue-comment-body
            .vssue-comment-header
              border-width: 0.125rem
              .vssue-comment-created-at
                color: $textColor
            .vssue-comment-main
              border-width: 0.125rem
              .markdown-body
                color: $textColor
                blockquote
                  border-color: #586074
                  color: #8b93a7
            .vssue-comment-footer
              border-width: 0.125rem
        .vssue-comment-edit-mode
          .vssue-comment-body
            .vssue-comment-main
              border-color: $borderColor
              box-shadow: none
              .vssue-edit-comment-input
                font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
                rfs-font-size(1.25rem)
                color: $textColor
                padding: 0
            .vssue-comment-footer
              .vssue-comment-hint
                color: $textColor
              .vssue-comment-operations
                span[title="Cancel"]
                  color: $textColor
                .vssue-comment-operation-muted
                  .vssue-icon
                    fill: $accentColor
        .vssue-comment-disabled
          .vssue-comment-body
            background-color: transparent
            .vssue-comment-main
              background-color: rgba(235, 113, 50, 0.1)

@media (max-width: 1113px)
  .comments-wrapper
    div.vssue
      .vssue-body
        .vssue-new-comment
          .vssue-new-comment-footer
            flex-direction: column
            .vssue-current-user
              text-align: center

@media (max-width: 980px)
  .vssue
    .vssue-pagination
      flex-direction: row
      justify-content: space-between
      .vssue-pagination-per-page
        text-align: left
      .vssue-pagination-page
        text-align: right
        margin-top: 0

@media (max-width: $MQNarrow)
  .comments-wrapper
    padding-left: 2rem
    padding-right: 2rem
    div.vssue
      .vssue-body
        .vssue-new-comment
          .vssue-comment-avatar
            width: 4.0625rem
            height: 4.0625rem
            img
              width: 4.0625rem
              height: 4.0625rem
            svg
              font-size: 4.0625rem
          .vssue-new-comment-body
            margin-left: 4.0625rem
          .vssue-new-comment-footer
            margin-left: 4.8125rem

@media (max-width: 980px)
  .comments-wrapper
    div.vssue
      .vssue-body
        .vssue-new-comment
          .vssue-comment-avatar
            width: 3.75rem
            height: 3.75rem
            img
              width: 3.75rem
              height: 3.75rem
            svg
              font-size: 3.75rem
          .vssue-new-comment-body
            margin-left: 3.75rem
          .vssue-new-comment-footer
            margin-left: 4.5rem

@media (max-width: 575px)
  .vssue
    .vssue-pagination
      flex-direction: column
      justify-content: center
      text-align: center
      .vssue-pagination-per-page
        text-align: center
      .vssue-pagination-page
        text-align: center
        margin-top: 0.625rem

@media (max-width: 569px)
  .comments-wrapper
    div.vssue
      .vssue-body
        .vssue-new-comment
          .vssue-comment-avatar
            width: 3.4375rem
            height: 3.4375rem
            img
              width: 3.4375rem
              height: 3.4375rem
            svg
              font-size: 3.4375rem
          .vssue-new-comment-body
            margin-left: 3.4375rem
            .vssue-new-comment-input
              margin-left: 0.625rem
          .vssue-new-comment-footer
            margin-left: 4.0625rem

@media (max-width: $MQMobileNarrow)
  .comments-wrapper
    padding-left: 1.5rem
    padding-right: 1.5rem
    .vssue-comment-header
      display: flex
      flex-direction: column
      align-items: center
      .vssue-comment-created-at
        margin-top: 0.125rem
        text-align: center

@media (max-width: 385px)
  .comments-wrapper
    div.vssue
      .vssue-header
        flex-direction: column

@media (max-width: 349px)
  .comments-wrapper
    padding-left: 1.5rem
    padding-right: 1.5rem
    .vssue-comment
      .vssue-comment-body
        .vssue-comment-footer
          display: flex
          flex-direction: column
          text-align: center
          .vssue-comment-reactions > :last-child
            margin-right: 0
          .vssue-comment-operations
            margin-top: 0.25rem
          .vssue-comment-operations > :first-child
            margin-left: 0
</style>
