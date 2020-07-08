<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        Title of the Post <span>{{ this.$route.params.id }}</span> is
        {{ loadedPost.title | getUpperCase }}
      </h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on
          {{ loadedPost.updatedDate | getLocaleDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@gotovit-domain.com"
          >feedback@gotovit-domain.com</a
        >
      </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Index',
  filters: {
    getUpperCase(val) {
      return val.toUpperCase();
    },
    getLocaleDate(date) {
      return new Date(date).toLocaleString('en-GB');
    }
  },
  async asyncData(context) {
    try {
      const { data: loadedPost } = await axios.get(
        'https://my-nuxt-blog-bc8fb.firebaseio.com/posts/' +
          context.params.id +
          '.json'
      );

      return { loadedPost };
    } catch (e) {
      console.dir(e);
    }
  },
  data() {
    return {
      loadedPost: {}
    };
  }
};
</script>

<style scoped lang="scss">
.single-post-page {
  text-align: center;
  box-sizing: border-box;
  padding: 30px;

  .post {
    width: 100%;

    .post-title {
      margin: 0;

      span {
        font-size: 0.5em;
        color: gray;
      }
    }

    .post-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 3px solid #ccc;
      margin-bottom: 37px;

      .post-detail {
        color: rgb(88, 88, 88);
        margin: 0 10px;
      }
    }

    @media (min-width: 768px) {
      .post-details {
        flex-direction: row;
      }
    }
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-feedback {
    margin-top: 5px;
    a {
      color: red;
      text-decoration: none;
    }

    a:hover,
    a:active {
      color: salmon;
    }
  }
}
</style>
