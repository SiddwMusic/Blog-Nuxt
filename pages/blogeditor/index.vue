<template>
 <div>
   <div class="col-md-12 text-center">
     <h3>Create Blog</h3>
   </div>
   <hr />  
 <div class="container-fluid">

    <div class="col-md-12 form-group">
        <label class="form-label">Blog Title</label>
        <input class="form-control" id="blogTitle" v-model="blog.title" required>
    </div>
    <div class="col-md-12 form-group">
        <label class="form-label">Blog Description</label>
        <input class="form-control" id="desc" v-model="blog.description" />
    </div>
    <div class="col-md-12 form-group">
        <label class="form-label">Blog Author</label>
        <input class="form-control" id="desc" v-model="blog.author" required/>
    </div>  
    <div class="col-md-12 form-group">
      <label class="form-label">Blog Content</label>
      <vue-editor v-model="blog.blogdetails"></vue-editor>
    </div>        
      <div class="col-md-12 text-center">
          <button class="btn btn-primary" v-on:click="SaveBlog()">Save</button>
      </div>
  </div>
 </div>
</template>

<script>
import VueEditor from './../../components/Editor.vue'
//import { async } from 'q';
import { repoFactory } from './../../Repositories/RepoFactory.js'

const blogrepo = repoFactory.get("blogsapi");

  export default {
    name: 'blogeditor',
    head() {
    return {
      title:'Blog creator Page',
      meta:[{
          hid:'description',
          name: 'description',
          content:'this is blog create page, where you can create new blog'
      }]     
    }
  },
     components: {
      VueEditor
   },

   data() {
      return {
         blog : {} 
       }
   },
    methods: {
     SaveBlog(){
        this.blog.id = 0;
        console.log(this.blog);
        blogrepo.postBlog(JSON.stringify(this.blog));
        //debugger;
        alert("Blog Saved!")
        $nuxt.$router.push({ name: "blog"});
     }
    }
  }
</script>

<style>
  .container {
    width: 60%;
    margin: 0 auto;
    padding: 50px 0;
  }
     .quill-editor {
      min-height: 200px;
      max-height: 400px;
      overflow-y: auto;
    }
</style>