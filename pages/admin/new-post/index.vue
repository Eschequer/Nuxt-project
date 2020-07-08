<template>
  <div class="admin-new=post-page">
    <section class="new-post-form">
      <AdminPostForm @save="onSave" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm';

export default {
  name: 'Index',
  layout: 'admin',
  components: { AdminPostForm },
  methods: {
    onSave(postData) {
      this.$store
        .dispatch('addPost', postData)
        .then(() => this.$router.push('/admin'))
        .catch((error) => console.dir(error));
    }
  }
};
</script>

<style scoped lang="scss"></style>
