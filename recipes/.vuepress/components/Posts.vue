<template>
  <div class="container">
    <div class="posts list-group" v-if="posts.length">
      <a class="post list-group-item list-group-item-action flex-column align-items-start" v-for="post in posts" :href="post.path">
          <h3 class="mb-2 text-left text-black">{{post.frontmatter.title}}</h3>
          <p class="mb-0 text-left">{{post.frontmatter.tags.join(', ')}}</p>
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return (a.frontmatter.title > b.frontmatter.title) ? 1 : -1;
        });
      return posts;
    }
  }
};
</script>

<style scoped>
  .posts h3 {
    color: #000000
  }

  .posts p {
    color: #808080
  }

  .posts a:hover {
    color: #BEA81E
  }
</style>
