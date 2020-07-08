import Vuex from 'vuex';
import axios from 'axios';

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
        return axios
          .post('https://my-nuxt-blog-bc8fb.firebaseio.com/posts.json', post)
          .then((res) => {
            context.commit('addPost', { ...post, id: res.data.name });
          })
          .catch((error) => console.dir(error));
      },
      editPost(context, editedPost) {
        return axios
          .put(
            'https://my-nuxt-blog-bc8fb.firebaseio.com/posts/' +
              editedPost.id +
              '.json',
            editedPost
          )
          .then((res) => {
            console.dir(res);
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
          const { data } = await axios.get(
            'https://my-nuxt-blog-bc8fb.firebaseio.com/posts.json'
          );

          posts = data;
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
