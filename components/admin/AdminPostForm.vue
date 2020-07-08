<template>
  <form @submit.prevent="submit">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink"
      >Thumbnail Link</AppControlInput
    >
    <AppControlInput v-model="editedPost.content" control-type="textarea"
      >Content</AppControlInput
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
</template>

<script>
import AppButton from '~/components/UI/AppButton';
import AppControlInput from '~/components/UI/AppControlInput';

export default {
  name: 'AdminPostForm',
  components: { AppButton, AppControlInput },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnailLink: '',
            content: '',
            updatedDate: new Date()
          }
    };
  },
  methods: {
    submit() {
      this.$emit('save', this.editedPost);
    },
    cancel() {
      this.$router.push('/admin');
    }
  }
};
</script>

<style scoped lang="scss">
form {
  width: 94%;
  margin: 0 auto;

  & > * {
    margin: 10px;
  }
}
@media (min-width: 768px) {
  form {
    width: 60%;
  }
}
</style>
