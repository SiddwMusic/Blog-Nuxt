<template>
  <div>
    <div class="col-md-12 text-center">
      <h3>Edit Blog</h3>
    </div>
    <hr>
    <div class="container-fluid">
      <div class="col-md-12 form-group">
        <label class="form-label">Blog Title</label>
        <input class="form-control" id="blogTitle" v-model="blog.title">
      </div>
      <div class="col-md-12 form-group">
        <label class="form-label">Blog Description</label>
        <input class="form-control" id="desc" v-model="blog.description" required />
      </div>
      <div class="col-md-12 form-group">
        <label class="form-label">Blog Author</label>
        <input class="form-control" id="desc" v-model="blog.author" required />
      </div>
      <div class="col-md-12 form-group">
        <label class="form-label">Blog Content</label>
        <vue-editor v-model="blog.blogdetails"></vue-editor>
      </div>
      <div class="col-md-12 text-center">
        <button v-on:click="SaveBlog()">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import VueEditor from "./../../components/Editor.vue";
//import { async } from 'q';
import { repoFactory } from "./../../Repositories/RepoFactory.js";
//import Router from './../router.js'

const blogrepo = repoFactory.get("blogsapi");

export default {
  name: "blogdetails",
  head() {
    return {
      title:'Blog Editor Page',
      meta:[{
          hid:'description',
          name: 'description',
          content:'this is blog editor page, where you can edit your blog'
      }]     
    }
  },
  components: {
    VueEditor
  },

  data() {
    return {
      blog: {}
    };
  },
  created() {
    var id = this.$route.params.id;
    this.getblog(id);
  },
  methods: {
    async getblog(id) {
      const { data } = await blogrepo.getblog(id);
      this.blog = data;
      this.content = data.blogdetails;
    },
    SaveBlog() {
      blogrepo.updateblog(this.blog.id, this.blog);
      alert("Blog Saved!");
       $nuxt.$router.push({ name: "blog"});
    }
  }
};
</script>