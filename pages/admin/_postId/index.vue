<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm';
export default {
  name: 'Index',
  layout: 'admin',
  components: { AdminPostForm },
  data() {
    return {
      loadedPost: {
        author: 'Maxksim',
        title: 'Post about my work',
        content: 'Nuxt Project',
        thumbnailLink:
          'https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg'
      }
    };
  }
};
</script>

<style scoped></style>
