<template>
  <nuxt-link class="post-preview" :to="postLink">
    <article>
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: 'url(' + thumbnailLink + ')' }"
      ></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>Hi, my name is {{ author }}</p>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    author: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnailLink: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id;
    }
  }
};
</script>

<style scoped lang="scss">
a.post-preview {
  text-decoration: none;
  color: black;
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 5px 7px 5px #ccc;
  background-color: white;

  article {
    .post-thumbnail {
      width: 100%;
      height: 200px;
      background-color: lightgrey;
      background-position: center;
      background-size: cover;
    }

    .post-content {
      padding: 10px;
      text-align: center;

      & > * {
        margin: 5px;
      }
    }
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
</style>
