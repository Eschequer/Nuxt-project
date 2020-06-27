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
      }
    },
    actions: {
      setPosts(context, posts) {
        context.commit('setPosts', posts);
      },
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve) => {
          vuexContext.commit('setPosts', [
            {
              id: '1',
              title: 'My First Post',
              previewText: 'This is my first blog! Join me!',
              thumbnail:
                'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'
            },
            {
              id: '2',
              title: 'My Second Post',
              previewText: 'This is my second blog! Get ready!',
              thumbnail:
                'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg'
            },
            {
              id: '3',
              title: 'Third Post',
              previewText: 'Interesting Info About Technology!',
              thumbnail:
                'https://cdn.pixabay.com/photo/2015/03/07/05/24/technology-662833_1280.jpg'
            }
          ]);

          resolve();
        });
      }
    }
  });
};

export default createStore;
