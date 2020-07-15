<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  middleware: 'log',
  fetch(context) {
    if (context.store.getters.loadedPosts.length > 0) {
      console.log('store has posts and fetch aborted');
      return;
    }

    return new Promise((resolve, reject) => {
      resolve({
        loadedPosts: [
          {
            id: '1',
            author: 'John Brown',
            title: 'My First Post',
            previewText: 'This is my first blog! Join me!',
            thumbnailLink:
              'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'
          },
          {
            id: '2',
            author: 'Nicky',
            title: 'My Second Post',
            previewText: 'This is my second blog!',
            thumbnailLink:
              'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'
          },
          {
            id: '3',
            author: 'Cat',
            title: 'Third Post',
            previewText: 'Interesting Info About Technology',
            thumbnailLink:
              'https://cdn.pixabay.com/photo/2015/03/07/05/24/technology-662833_1280.jpg'
          }
        ]
      });

      reject(new Error('Error'));
    })
      .then((data) => {
        context.store.dispatch('setPosts', data.loadedPosts);
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
