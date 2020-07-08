<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @save="save" />
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '~/components/admin/AdminPostForm';

export default {
  name: 'Index',
  layout: 'admin',
  components: { AdminPostForm },
  async asyncData(context) {
    try {
      const { data: loadedPost } = await axios.get(
        'https://my-nuxt-blog-bc8fb.firebaseio.com/posts/' +
          context.params.postId +
          '.json'
      );
      loadedPost.id = context.params.postId;

      return { loadedPost };
    } catch (error) {
      console.dir(error);
    }
  },
  data() {
    return {
      loadedPost: {}
    };
  },
  methods: {
    save(editedPost) {
      this.$store
        .dispatch('editPost', editedPost)
        .then(() => this.$router.push('/admin'))
        .catch((error) => console.dir(error));
    }
  }
};
</script>

<style scoped></style>
