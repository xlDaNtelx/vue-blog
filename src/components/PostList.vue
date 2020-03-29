<template>
  <div class="blog-container">
    <h1>Vue Blog</h1>
    <hr />
    <div class="blog-posts-container">
      <div v-for="(post, index) in posts" class="blog-post-preview" :key="post.id">
        <post-list-item :postIndex="index" :post="post" />
      </div>
    </div>
    <b-spinner v-if="loading" variant="success" label="Spinning"></b-spinner>
  </div>
</template>

<style lang="scss" scoped>
.blog-posts-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.blog-item-preview {
  width: 520px;
  img {
    width: 100%;
  }
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import { FETCH_POSTS } from "../store/modules/posts/posts.action-types";
import { POSTS_SELECTORS } from "../store/modules/posts/posts.selectors-types";

import PostListItem from "./PostListItem";

export default {
  name: "PostList",
  components: {
    "post-list-item": PostListItem
  },
  computed: mapGetters({
    posts: POSTS_SELECTORS.GET_POSTS,
    loading: POSTS_SELECTORS.GET_POSTS_LOADING
  }),
  methods: mapActions({ fetchPosts: FETCH_POSTS }),
  mounted() {
    this.fetchPosts();
  }
};
</script>
