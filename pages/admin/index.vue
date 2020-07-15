<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')"
        >Create Post</AppButton
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList is-admin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'admin',
  async asyncData(context) {
    if (context.store.getters.loadedPosts.length > 0) {
      return {
        loadedPosts: context.store.getters.loadedPosts
      };
    }

    return await new Promise((resolve, reject) => {
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
    });
  },
  data() {
    return {
      loadedPosts: []
    };
  },
  head() {
    return {
      title: 'Admin Page'
    };
  }
};
</script>

<style scoped lang="scss">
.admin-page {
  padding: 20px;

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
}
</style>
