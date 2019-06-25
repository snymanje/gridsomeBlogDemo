export default [
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\404.vue"),
    meta: { data: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\Index.vue"),
    meta: { data: true }
  },
  {
    path: "/products",
    component: () => import(/* webpackChunkName: "page--src-pages-products-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\Products.vue"),
    meta: { data: true }
  },
  {
    path: "/new",
    component: () => import(/* webpackChunkName: "page--src-pages-new-index-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\new\\Index.vue"),
    meta: { data: true }
  },
  {
    path: "/new/products",
    component: () => import(/* webpackChunkName: "page--src-pages-new-products-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\new\\Products.vue"),
    meta: { data: true }
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\About.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\Blog.vue"),
    meta: { data: true }
  },
  {
    path: "/posts/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\templates\\Post.vue"),
    meta: { data: true }
  },
  {
    path: "/tags/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\templates\\Tag.vue"),
    meta: { data: true }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\jean_\\Google Drive\\Visual Studio\\Gridsome\\src\\pages\\404.vue"),
    meta: { data: true }
  }
]

