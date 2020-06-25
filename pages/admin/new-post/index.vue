<template>
  <div class="admin-new=post-page">
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/admin/AdminPostForm';
export default {
  name: 'Index',
  layout: 'admin',
  components: { AdminPostForm }
};
</script>

<style scoped lang="scss"></style>
