<template>
  <div class="admin-new=post-page">
    <section class="new-post-form">
      <form @submit.prevent="save">
        <AppInputControl v-model="editedPost.author"
          >Author Name</AppInputControl
        >
        <AppInputControl v-model="editedPost.title">Title</AppInputControl>
        <AppInputControl v-model="editedPost.thumbnailLink"
          >Thumbnail Link</AppInputControl
        >
        <AppInputControl v-model="editedPost.content" control-type="textarea"
          >Content</AppInputControl
        >
        <AppButton type="submit">Save</AppButton>
        <AppButton
          type="button"
          btn-style="cancel"
          style="margin-left: 10px"
          @click="cancel"
          >Cancel</AppButton
        >
      </form>
    </section>
  </div>
</template>

<script>
import AppInputControl from '~/components/UI/AppControlInput';
import AppButton from '~/components/UI/AppButton';
export default {
  name: 'Index',
  components: { AppButton, AppInputControl },
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    };
  },
  methods: {
    save() {
      console.log(this.editedPost);
    },
    cancel() {
      this.$router.push('/admin');
    }
  }
};
</script>

<style scoped></style>
