import Prism from 'prismjs'
import Vue from 'vue'
import 'prismjs/themes/prism-tomorrow.css' // You can add other themes if you want
import 'prismjs/components/prism-elixir.js' // You can add other themes if you want

// Include the line numbers plugin: (optional)
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

// Include some other plugins: (optional)
import 'prismjs/plugins/show-language/prism-show-language'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'



const prism = Vue.component('prism', {
  props: {
    lang: {
      type: String,
      default: 'js'
    }
  },
  mounted () {
    Prism.highlightAll()
  },
  template: '<div class="prism"><pre class="line-numbers" :class="`language-${lang}`"><code><slot></slot></code></pre></div>'
})
