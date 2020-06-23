<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      title="Greetings!"
      thumbnail="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg"
      preview-text="This is my first post"
    /><PostPreview
      id="2"
      title="Hey there!"
      thumbnail="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg"
      preview-text="This is my second post"
    /><PostPreview
      id="3"
      title="Hi again!"
      thumbnail="https://cdn.pixabay.com/photo/2017/06/21/07/33/background-2426328_1280.jpg"
      preview-text="It's my next post"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview';

export default {
  name: 'PostList',
  components: {
    PostPreview
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
