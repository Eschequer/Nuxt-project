<template>
  <section class="posts-list">
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :author="post.author"
      :is-admin="isAdmin"
      :title="post.title"
      :thumbnail-link="post.thumbnailLink"
      :preview-text="post.previewText ? post.previewText : post.content"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview';

export default {
  name: 'PostList',
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.posts-list {
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
