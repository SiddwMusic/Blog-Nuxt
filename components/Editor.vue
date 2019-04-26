<template>
  <section class="">
    <div ref="quilleditor" :content="content" 
    v-quill:myQuillEditor="editorOption"
         @change="onEditorChange($event)"
         @blur="onEditorBlur($event)"
         @focus="onEditorFocus($event)"
         @ready="onEditorReady($event)">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'VueEditor',
    props: {
    value: String,
    id: {
      type: String,
      default: 'quill-container'
    },
    placeholder: String,
    disabled: Boolean,
    editorToolbar: Array,
  },
    data () {
      return {
        content: this.value,
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block', 'image'],

              [{ 'list': 'ordered'}, { 'list': 'bullet' }],

              [{ 'indent': '-1'}, { 'indent': '+1' }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              [{ 'align': [] }],

              ['clean']
            ]
          }
        }
      }
    }, 
    mounted() {
      //console.log('app init, my quill insrance object is:', this.myQuillEditor)
       setTimeout(() => {
        this.content = this.value
      }, 1000)
    },
    methods: {
      onEditorBlur(editor) {
        //console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        //console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        //console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        //console.log('editor change!', editor)
        this.$emit('input', html)
        //this.content = html
      }
    }
  }
</script>

<style>
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
  }
  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>