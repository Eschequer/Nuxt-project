<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList';

export default {
  name: 'Index',
  components: {
    PostList
  }
};
</script>

<style scoped lang="scss">
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
