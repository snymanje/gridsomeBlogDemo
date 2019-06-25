<template>
  <Layout>
    <h1>Blog</h1>
    <article v-for="edge in $page.allPost.edges" :key="edge.node.id" style="margin-bottom: 2em;">
      <g-image :src="edge.node.cover_image" style="width: 100%"/>
      <h2>{{edge.node.title}}</h2>
      <p>{{edge.node.excerpt}}</p>
      <p>Posted {{edge.node.date}} · {{edge.node.timeToRead}} min read</p>
      <div>
        <g-link
          style="padding-right: .25em"
          v-for="tag in edge.node.tags"
          :to="tag.path"
          :key="tag.id"
        >#{{tag.id}}</g-link>
      </div>
      <g-link :to="edge.node.path">Read Post</g-link>
      <!-- <div v-html="edge.node.content"/> -->
    </article>
    <Pager :info="$page.allPost.pageInfo" linkClass="pager"/>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        excerpt
        date (format: "MMMM Do, YYYY")	
        tags {
          id
          path
        }
        timeToRead
        path
        cover_image (width: 1000, height: 300, quality: 100, blur: 10)
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: { Pager }
};
</script>

<style>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 40px 20px;
}
</style>
