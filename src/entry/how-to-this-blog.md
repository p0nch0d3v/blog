---
type: article
thumbnail: /img/vuepress-logo.png
title: How this blog was made
shortDescription: A story told in the way of technical steps of how this blog was technically made
tags:
    - docker
    - node-js
---
<img src="/img/vuepress-logo.png" class="vuepress-logo" />

### This entry is about how this blog site was made, not from the perspective of the entries, it's about the technologies behind it.

1. Create and change to the folder where store it
```sh
mkdir this-blog &&  cd this-blog
```

2. Use `docker` as `node` cli
```sh
docker run --rm --interactive --tty --volume ${PWD}:/app --workdir '/app' node:lts-alpine sh
```

3. Inside the `docker` container, and inside the `/app` folder
```sh
npm init
```
And finish the process

4. Install `vuepress`
```sh
npm install vuepress
```

5. Create the entry page
```sh
mkdir src && echo '# Hello Blog' > src/README.md
```

6. Add two script to `package.json`
```json
{
    "docs:dev": "vuepress dev src",
    "docs:build": "vuepress build src"
}
```

7. As `vuepress` by default run on the `8080` port, run the container with this open port
```sh
docker run --rm --interactive --tty --volume ${PWD}:/app --workdir '/app' -p 8080:8080 node:lts-alpine sh
```
a. And inside the docker container
```sh
npm run docs:dev
```

b. Alternatly you can use this `docker-compose` approach
```yaml
version: '3'
services:
  site:
    image: node:lts
    command: >
      sh -c "cd /app && 
              npm install &&
              npm run docs:dev"
    volumes:
      - .:/app
    ports:
      - 8080:8080
```
8. And the blog site running with basic functionality.

![](/img/this-blog-sample.png)

9. Then the Posts.vue was created

[Posts.vue](/components/Posts.vue)

a. It was added to the home page

```markdown
# Hello Blog
<Posts />
```

10. Additionally a "Tags" component was created, it can be used as a full page.

[Tags.vue](/components/Tags.vue)

And the rest is history ... and it is up to you.