<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">Title of the Post {{ loadedPosts.id }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPosts.updatedDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPosts.author }}</div>
      </div>
      <p>{{ loadedPosts.previewText }}</p>
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
export default {
  name: 'Index',
  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        loadedPosts: {
          id: context.params.id,
          previewText: 'Id number of this blog is ' + context.route.params.id,
          updatedDate: new Date().toLocaleString('en-GB'),
          author: 'Maxksim'
        }
      });

      reject(new Error('Error!!!'));
    })
      .then((result) => result)
      .catch(context.error());
  },
  data() {
    return {
      loadedPosts: {}
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
