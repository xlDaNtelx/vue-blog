<template>
  <div>
    <h3>{{ post.name }}</h3>
    <b-card :img-src="getImgURL()" img-alt="Card image" img-top>
      <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
    </b-card>
    <router-link :to="`/blog/${post.ID}`">
      <b-button class="mt-3" variant="success">Read more</b-button>
    </router-link>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: { post: {}, postIndex: Number },
  methods: {
    getImgURL() {
      return `https://placekitten.com/520/30${this.$props.postIndex}`;
    }
  }
};
</script>