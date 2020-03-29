<template>
  <div class="home">
    <post-form />
  </div>
</template>


<script>
import PostForm from "@/components/PostForm";

export default {
  name: "AddPost",
  components: {
    "post-form": PostForm
  }
};
</script>