import Vuex from 'vuex';

const createStore = function() {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token !== null;
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
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      addPost(context, post) {
        return this.$axios
          .$post('/posts.json?auth=' + context.state.token, post)
          .then((data) => {
            context.commit('addPost', { ...post, id: data.name });
          })
          .catch((error) => console.dir(error));
      },
      authenticateUser({ commit, dispatch }, authData) {
        let authURL =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.fbAPIKey;

        if (!authData.isLogin) {
          authURL =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
            process.env.fbAPIKey;
        }

        return this.$axios
          .$post(authURL, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then((res) => {
            console.dir(res);

            localStorage.setItem('token', res.idToken);
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + res.expiresIn * 1000
            );

            commit('setToken', res.idToken);
            dispatch('setLogoutTimer', res.expiresIn * 1000);
          })
          .catch((e) => console.dir(e));
      },
      editPost(context, editedPost) {
        return this.$axios
          .$put(
            '/posts/' + editedPost.id + '.json?auth=' + context.state.token,
            editedPost
          )
          .then((res) => {
            context.commit('editPost', editedPost);
          })
          .catch((error) => console.dir(error));
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts);
      },
      initAuh({ commit, dispatch }) {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('tokenExpiration');

        console.dir(`expiration date is ` + new Date(+expirationDate));

        if (new Date() > expirationDate || !token) {
          console.log(new Date(+expirationDate));
          console.log('Expired');
          return;
        }

        commit('setToken', token);
        dispatch('setLogoutTimer', +expirationDate - new Date());
      },
      setLogoutTimer(context, duration) {
        setTimeout(() => {
          context.commit('clearToken');
        }, duration);
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
