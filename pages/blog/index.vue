<template>
  <div class="blog">
    <div class="col-md-12 text-center">
      <h3>Blogs</h3>
    </div>
    <hr>
    <div class="container-fluid">
      <div class="">
        <div class="row blog">
          <div class="col-md-12">
            <div class="row">
              <div v-for="blog in blogs" :key="blog.id" class="col-md-4">
                <div class="item-box-blog">
                  <div class="item-box-blog-image">
                    <!--Date-->
                    <div class="item-box-blog-date bg-blue-ui white">
                      <span class="mon">{{moment(blog.createdOn).format('MMM-Do')}}</span>
                    </div>
                    <!--Image-->
                    <figure>
                      <img
                        alt
                        src="../../assets/blog-2355684_640.jpg"
                      >
                    </figure>
                  </div>
                  <div class="item-box-blog-body">
                    <!--Heading-->
                    <div class="item-box-blog-heading">
                      <h5>{{blog.title}}</h5>
                    </div>
                    <!--Data-->
                    <div class="item-box-blog-data" style="padding: px 15px;">
                      <p>
                        <i class="fa fa-user-o"></i> {{blog.author}},
                        <i class="fa fa-comments-o">
                           <a href="#" v-on:click="OpenBlog(blog.id)">
                            Edit
                          </a>, 
                          <a href="#" v-on:click="DeleteBlog(blog.id)">
                            Delete
                          </a>
                        </i>
                      </p>
                    </div>
                    <!--Text-->
                    <div class="item-box-blog-text">
                      <p v-html="blog.blogdetails"></p>
                    </div>
                    <div class="mt">
                      <a
                        href="#"
                        tabindex="0"
                        v-on:click="ViewBlog(blog.id)"
                        class="btn bg-blue-ui white read"
                      >read more</a>
                    </div>
                    <!--Read More Button-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { repoFactory } from "./../../Repositories/RepoFactory.js";
const blogrepo = repoFactory.get("blogsapi");
import moment from "moment";

export default {
  name: "Blog-List",
  head() {
    return {
      title:'Blog List Page',
      meta:[{
          hid:'description',
          name: 'description',
          content:'this is blog list page, where all blogs has been listed'
      }]     
    }
  },
  data() {
    return { blogs: {} };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await blogrepo.get();
      this.blogs = data;
    },
    OpenBlog(blogid) {
      $nuxt.$router.push({ name: "blogeditor-id", params: { id: blogid } });
    },
    ViewBlog(bid) {
      $nuxt.$router.push({ name: "blog-id", params: { id: bid } });
    },
    DeleteBlog(id){
      blogrepo.deleteBlog(id);
      alert('Blog Deleted');
      window.location.reload(true);
    },
     moment: function (date) {
    return moment(date);
  }
  },
  props: {
    msg: String
  }
};
</script>

<style>
.cta-100 {
  margin-top: 100px;
  padding-left: 8%;
  padding-top: 7%;
}
.col-md-4 {
  padding-bottom: 20px;
}

.white {
  color: #fff !important;
}
.mt {
  float: left;
  margin-top: -20px;
  padding-top: 20px;
}
.bg-blue-ui {
  background-color: #708198 !important;
}
figure img {
  width: 300px;
}

#blogCarousel {
  padding-bottom: 100px;
}

.blog .carousel-indicators {
  left: 0;
  top: -50px;
  height: 50%;
}

/* The colour of the indicators */

.blog .carousel-indicators li {
  background: #708198;
  border-radius: 50%;
  width: 8px;
  height: 8px;
}

.blog .carousel-indicators .active {
  background: #0fc9af;
}

.item-carousel-blog-block {
  outline: medium none;
  padding: 15px;
}

.item-box-blog {
  border: 1px solid #dadada;
  text-align: center;
  z-index: 4;
  padding: 20px;
}

.item-box-blog-image {
  position: relative;
}

.item-box-blog-image figure img {
  width: 100%;
  height: auto;
}

.item-box-blog-date {
  position: absolute;
  z-index: 5;
  padding: 4px 20px;
  top: -20px;
  right: 8px;
  background-color: #41cb52;
}

.item-box-blog-date span {
  color: #fff;
  display: block;
  text-align: center;
  line-height: 1.2;
}

.item-box-blog-date span.mon {
  font-size: 18px;
}

.item-box-blog-date span.day {
  font-size: 16px;
}

.item-box-blog-body {
  padding: 10px;
}

.item-heading-blog a h5 {
  margin: 0;
  line-height: 1;
  text-decoration: none;
  transition: color 0.3s;
}

.item-box-blog-heading a {
  text-decoration: none;
}

.item-box-blog-data p {
  font-size: 13px;
}

.item-box-blog-data p i {
  font-size: 12px;
}

.item-box-blog-text {
  max-height: 100px;
  overflow: hidden;
}

.mt-10 {
  float: left;
  margin-top: -10px;
  padding-top: 10px;
}

.btn.bg-blue-ui.white.read {
  cursor: pointer;
  padding: 4px 20px;
  float: left;
  margin-top: 10px;
}

.btn.bg-blue-ui.white.read:hover {
  box-shadow: 0px 5px 15px inset #4d5f77;
}
</style>

