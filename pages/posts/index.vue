<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList';

export default {
  name: 'Index',
  components: {
    PostList
  },
  fetch(context) {
    if (context.store.getters.loadedPosts.length > 0) {
      return;
    }

    return new Promise((resolve, reject) => {
      resolve({
        loadedPosts: [
          {
            id: '1',
            title: 'My First Post',
            previewText: 'This is my first blog! Join me!',
            thumbnail:
              'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'
          },
          {
            id: '2',
            title: 'My Second Post',
            previewText: 'This is my second blog! Get ready!',
            thumbnail:
              'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'
          },
          {
            id: '3',
            title: 'Third Post',
            previewText: 'Interesting Info About Technology!',
            thumbnail:
              'https://cdn.pixabay.com/photo/2015/03/07/05/24/technology-662833_1280.jpg'
          }
        ]
      });

      reject(new Error('Error'));
    })
      .then((data) => {
        context.store.commit('setPosts', data.loadedPosts);
      })
      .catch((error) => console.dir(error));
  },
  data() {
    return {};
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
  /* created() {
    this.$store.dispatch('setPosts', this.loadedPosts);
    console.dir(this.$store.getters.loadedPosts);
  } */
};
</script>

<style scoped lang="scss">
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
