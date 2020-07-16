import Vuex from 'vuex';
import Cookies from 'js-cookie';

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

            Cookies.set('idToken', res.idToken);
            Cookies.set(
              'expirationDate',
              new Date().getTime() + res.expiresIn * 1000
            );

            commit('setToken', res.idToken);
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
      initAuh({ commit, dispatch }, req) {
        let token;
        let expirationDate;

        if (req) {
          if (!req.headers.cookie) return;

          const tokenCookie = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('idToken='));
          const expirationDateCookie = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('expirationDate='));

          if (!tokenCookie || !expirationDateCookie) return;

          token = tokenCookie.split('=')[1];
          expirationDate = expirationDateCookie.split('=')[1];
        } else {
          token = localStorage.getItem('token');
          expirationDate = localStorage.getItem('tokenExpiration');

          console.dir(`expiration date is ` + new Date(+expirationDate));
        }

        if (new Date() > expirationDate || !token) {
          console.log('Expired at ' + new Date(+expirationDate));
          commit('clearToken');
          return;
        }

        commit('setToken', token);
      },
      logout({ commit }) {
        commit('clearToken');
        Cookies.remove('idToken');
        Cookies.remove('expirationDate');

        if (process.client) {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
        }
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
