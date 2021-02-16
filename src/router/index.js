import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/admin",
    name:"admin",
    component:()=>
    import("../components/admin/admin.vue")
  },
  {
    path:"/admin_post",
    name:"admin_post",
    component:()=>
    import("../components/admin/admin_post.vue")
  },
  {
    path:"/admin_news",
    name:"admin_news",
    component:()=>
    import("../components/admin/admin_news.vue")
  },
  {
    path : "/:id",
    name:"news",
    props:true,
    component:()=>
    import("../components/detail_news.vue")
  },
  {
    path: "/admin/news/:id",
    name: "admin_id",
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ "../components/admin/admin_id.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
