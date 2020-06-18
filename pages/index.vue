<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link class="post-preview" :to="'/posts/' + 1">
        <article>
          <div class="post-thumbnail"></div>
          <div class="post-content">
            <h1>Post Title 1</h1>
            <p>Preview Text 1</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link class="post-preview" :to="'/posts/' + 2">
        <article>
          <div class="post-thumbnail"></div>
          <div class="post-content">
            <h1>Post Title 2</h1>
            <p>Preview Text 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  components: {}
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

  .featured-posts {
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    a.post-preview {
      text-decoration: none;
      color: black;
      display: block;
      width: 100%;
      border: 1px solid #ccc;
      box-shadow: 0 2px 2px #ccc;
      background-color: white;
      margin: 0 auto;

      .post-thumbnail {
        width: 100%;
        height: 200px;
        background-image: url('https://pixabay.com/get/55e0dd4b4357a414f6d1867dda35367b1c3ddfe551517648_1920.jpg');
        background-position: center;
        background-size: cover;
      }

      .post-content {
        padding: 10px;
        text-align: center;
      }
    }

    @media (min-width: 850px) {
      a.post-preview {
        width: 400px;
        margin: 10px;
      }
    }

    a:hover,
    a:active {
      .post-content {
        background-color: #ccc;
      }
    }
  }
}
</style>
