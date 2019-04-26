  <template>
    <section class="container-fluid" style="padding-top:50px;">
      <div class="text-center">
        <logo />
        <h1 class="title">
          Blogger
        </h1>
        <h2 class="subtitle">
          Blogger App
        </h2>
        <div class="col-md-12 links">
          <nuxt-link class="button--green" to="/blog">Blog List</nuxt-link>
          <nuxt-link to="blogeditor" class="button--grey">New Blog</nuxt-link>
        </div>
      </div>
    </section>
  </template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
