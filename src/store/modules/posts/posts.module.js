import Vue from "vue";
import { getCoverPhotos } from "@/api/coverPhotos";

import { FETCH_POSTS } from './posts.action-types';
import { POSTS_TYPES } from './posts.mutations-types';
import { POSTS_SELECTORS } from './posts.selectors-types';

const initialState = {
  loading: true,
  posts: [],
  error: null
}

export default {
  state: { ...initialState },
  actions: {
    [FETCH_POSTS](context) {
      context.commit(POSTS_TYPES.FETCH_POSTS.IN_PROGRESS);
      getCoverPhotos()
        .then(response => {
          const posts = response.data.slice(0, 10);
          context.commit(POSTS_TYPES.FETCH_POSTS.SUCCESS, posts)
        })
        .catch((error) => context.commit(POSTS_TYPES.FETCH_POSTS.ERROR, error))
    }
  },
  mutations: {
    [POSTS_TYPES.FETCH_POSTS.IN_PROGRESS](state) {
      state.loading = true;
      state.error = null;
    },
    [POSTS_TYPES.FETCH_POSTS.SUCCESS](state, posts) {
      state.posts = posts;
      state.loading = false;
    },
    [POSTS_TYPES.FETCH_POSTS.ERROR](state, error) {
      state.error = error;
      state.loading = false;
    },
    [POSTS_TYPES.FETCH_POSTS.RESET](state) {
      for (let f in state) {
        Vue.set(state, f, initialState[f]);
      }
    }
  },
  getters: {
    [POSTS_SELECTORS.GET_POSTS](state) {
      return state.posts
    },
    [POSTS_SELECTORS.GET_POSTS_LOADING](state) {
      return state.loading
    }
  },
}