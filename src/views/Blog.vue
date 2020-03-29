<template>
  <div class="blog-container">
    <post-list />
  </div>
</template>

<style lang="scss" scoped>
.blog-posts-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import PostList from "../components/PostList";

export default {
  name: "Blog",
  components: { "post-list": PostList }
};
</script>
