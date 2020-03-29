<template>
  <div class="home">
    <post-detail :post="post" :imageSrc="getImgURL()" />
    <b-spinner v-if="loading" variant="success" label="Spinning"></b-spinner>
  </div>
</template>

<script>
import Post from "../components/Post";
import { getCoverPhoto } from "../api/coverPhotos";

export default {
  name: "PostDetail",
  components: {
    "post-detail": Post
  },
  methods: {
    getImgURL() {
      return `https://placekitten.com/520/30${this.$route.params.postId}`;
    }
  },
  data() {
    return {
      loading: false,
      post: null,
      error: null
    };
  },
  mounted() {
    this.loading = true;
    const {
      $route: { params }
    } = this;

    getCoverPhoto(params.postId).then(response => {
      this.loading = false;
      this.post = response.data;
    });
  }
};
</script>
