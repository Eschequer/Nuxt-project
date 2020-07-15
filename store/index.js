import Vuex from 'vuex';

const createStore = function() {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
        console.log(`postIndexed`);
        console.dir(state.loadedPosts[postIndex]);
      }
    },
    actions: {
      addPost(context, post) {
        return this.$axios
          .$post('/posts.json', post)
          .then((data) => {
            context.commit('addPost', { ...post, id: data.name });
          })
          .catch((error) => console.dir(error));
      },
      editPost(context, editedPost) {
        return this.$axios
          .$put('/posts/' + editedPost.id + '.json', editedPost)
          .then((res) => {
            context.commit('editPost', editedPost);
          })
          .catch((error) => console.dir(error));
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts);
      },
      async nuxtServerInit(vuexContext, context) {
        let posts = {};
        const postsArray = [];

        try {
          posts = await context.app.$axios.$get('/posts.json');
        } catch (e) {
          console.log(e);
        }

        for (const key in posts) {
          postsArray.push({ ...posts[key], id: key });
        }

        vuexContext.dispatch('setPosts', postsArray);
      }
    }
  });
};

export default createStore;
