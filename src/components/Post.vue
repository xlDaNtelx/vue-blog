<template>
  <div>
    <h1>Cat</h1>
    <img :src="getImgURL()" alt />
    <h3 class="mt-4">This post id is - {{ post.ID }}</h3>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  methods: {
    getImgURL() {
      return `https://placekitten.com/520/30${this.$route.params.postId - 1}`;
    }
  },
  props: {
    post: Object,
    imageSrc: String
  }
};
</script>