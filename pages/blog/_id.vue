<template>
<div>
    <div class="container-fluid cta-100">
        <div class="col-md-12">
            <h1>{{blog.title}}</h1>
        </div>
        <div class="col-md-12 mx-auto img-fluid">
            <span v-html="blog.blogdetails"></span>
        </div>
    </div>
</div>
</template>

<script>
import { repoFactory } from './../../Repositories/RepoFactory.js'
//import Router from './../router.js'

const blogrepo = repoFactory.get('blogsapi')

export default {
    name: 'BlogView',
    head(){
        return {
            title:'Blog view page',
            meta: [{
                hid:'description',
                name: 'description',
                content:'this is blog view page, where you can view your blog'
            }]
        }
    },
    data(){
        return{
            blog : []
        }
    },
    created(){
        var id = this.$route.params.id
        this.getblog(id)
    },
    methods: {
        async getblog(id){
      const { data } = await blogrepo.getblog(id)
      this.blog = data
      }
    }
}
</script>
<style>
span img{
    height: auto;
    width: 100%;    
}
</style>

