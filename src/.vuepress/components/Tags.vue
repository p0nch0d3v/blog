<template>
    <ul class="tags-wrapper">
        <li v-for="tag in tags" 
            v-bind:key="tag.id" 
            class="tag">
            <h2 v-bind:id="tag.name"
                class="tag__name">
                <a v-bind:href="'#' + tag.name">#</a>{{tag.name}}
            </h2>
            <ul class="pages-wrapper">
                <li v-for="page in tag.pages" 
                    v-bind:key="page.id"
                    class="page">
                    <a v-bind:href="page.path">{{page.title}}</a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            tags: []
        }
    },
    mounted() {
        this.$site.pages.forEach(page => {
            if (page.frontmatter.type?.toLowerCase() === 'article') {
                if (page.frontmatter.tags){
                    page.frontmatter.tags.forEach(tag => {
                        const _tag = this.tags.find(t => t.name === tag);
                        if (!_tag) {
                            this.tags.push({ 
                                name: tag, 
                                pages: [
                                    {
                                        title: page.title,
                                        path: page.path
                                    }
                                ]})
                        }
                        else {
                            _tag.pages.push({
                                title: page.title,
                                path: page.path
                            })
                        }
                    });
                    
                }
            }
        });
        this.tags = this.tags.sort((a, b) => a.name > b.name ? 1 : -1);
    }
}
</script>

<style scoped>
    .tags-wrapper {
        margin: 0;
        padding: 1vh 0 1vh 0;
        list-style: none;
        border: 1px solid transparent;
    }
    .tag {
        border: 1px solid transparent;
        font-weight: 500;
        padding: 0;
        border-bottom: 1px solid gray;
    }
    .tag__name {
        font-size: 3vh;
        color: black;
        border: none;
        padding: 0;
        margin-top: 0;
    }
    .pages-wrapper {
        list-style: none;
        padding: 1vh 0 1vh 0;
    }
    .page {
        padding: 0;
    }
</style>