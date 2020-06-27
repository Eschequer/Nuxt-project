<template>
  <section class="posts-list">
    <PostPreview
      v-for="(post, index) in posts"
      :id="index"
      :key="index"
      :is-admin="isAdmin"
      :title="post.title"
      :thumbnail="post.thumbnail"
      :preview-text="post.previewText"
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
  align-items: center;
  justify-content: center;
}
</style>
