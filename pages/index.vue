<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList';
export default {
  components: { PostList },
  asyncData(context) {
    console.log(context);
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
            previewText: 'This is my second blog!',
            thumbnail:
              'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'
          },
          {
            id: '3',
            title: 'Third Post',
            previewText: 'Interesting Info About Technology',
            thumbnail:
              'https://cdn.pixabay.com/photo/2015/03/07/05/24/technology-662833_1280.jpg'
          }
        ]
      });
    }).then((result) => result);
  },
  data() {
    return {
      loadedPosts: []
    };
  }
  /* created() {
    setTimeout(() => {
      this.loadedPosts = [
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
          previewText: 'Interesting Info About Technology',
          thumbnail:
            'https://cdn.pixabay.com/photo/2015/03/07/05/24/technology-662833_1280.jpg'
        }
      ];
    }, 2000);
  } */
};
</script>

<style scoped lang="scss">
.home-page {
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url('../assets/images/main-background.jpg');

    h1 {
      position: absolute;
      top: 10%;
      left: 5%;
      width: 90%;
      font-size: 1.5rem;
      color: black;
      background-color: rgb(211, 211, 211);
      padding: 10px;
      border-radius: 10px;
      box-shadow: 3px 3px 3px black;
      box-sizing: border-box;
      border: 1px solid black;
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 2rem;
      }
    }
  }
}
</style>
