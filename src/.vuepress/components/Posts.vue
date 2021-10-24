<template>
  <div class="posts-container" 
       v-if="pages && pages.length > 0">
    <div v-for="page in pages" 
         v-bind:key="page.id" 
         class="post-card">
      <div class="post-thumbnail" 
           v-if="page.frontmatter.thumbnail">
           <a v-bind:href="page.path">
            <img v-bind:src="page.frontmatter.thumbnail" />
           </a>
      </div>
      <div class="post-content"
           v-bind:class="{ 'full': !page.frontmatter.thumbnail }">
        <a class="page-title" 
           v-bind:href="page.path">{{ page.title }}</a>
        <div class="page-description">{{ page.frontmatter.description }}</div>
        <div class="page-tags" 
             v-if="page.frontmatter.tags">
          <span v-for="tag in page.frontmatter.tags" 
                v-bind:key="tag.id">
            <a v-bind:href="'/tags.html#' + tag">{{'#' + tag}}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="!pages || pages.length === 0">
    <i>No posts found yet.</i>
  </div>
</template>

<script>
export default  {
    data() {
    return {
      pages: []
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'article') {
        this.pages.push(page);
      }
    });
  }
};
</script>

<style scoped>
  .posts-container {
    border: 1px solid transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .post-card {
    border: 1px solid transparent;
    border-bottom: 1px solid gray;
    margin: 1vh 0 1vh 0;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
  }
  .post-thumbnail {
    border: 1px solid transparent;
    width: 25%;
    padding: 0.5vh 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;
    flex-grow: 2;
  }
  .post-content {
    border: 1px solid transparent;
    width: 75%;
    flex-grow: 2;
    padding: 0.5vh 0.5vw;
    display: flex;
    flex-direction: column;
  }
  .post-content.full {
    width: 100%;
  }
  .page-title {
    text-transform: uppercase;
    margin-bottom: 1vh;
    display: inline-block;
  }
  .page-description {
    font-style: italic;
    margin-bottom: 1vh;
    display: inline-block;
  }
  .page-tags {
    display: flex;
    flex-wrap: wrap;
  }
  .page-tags>span {
    margin-right: 1vw;
  }
</style>