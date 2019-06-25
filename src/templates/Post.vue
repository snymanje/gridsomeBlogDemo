<template>
  <Layout>
    <div v-html="$page.post.content" />
    <vue-disqus
      shortname="jsdemo-2"
      :identifier="$page.post.id"
    ></vue-disqus>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  post(path: $path) {
    id
    content
  }
}
</page-query>
