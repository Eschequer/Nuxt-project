<template>
  <div class="admin-new=post-page">
    <section class="new-post-form">
      <AdminPostForm @save="save" />
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
  methods: {
    save(postData) {
      axios
        .post('https://my-nuxt-blog-bc8fb.firebaseio.com/posts.json', postData)
        .then((result) => console.dir(result))
        .catch((error) => console.dir(error));
    }
  }
};
</script>

<style scoped lang="scss"></style>
