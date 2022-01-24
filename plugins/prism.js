import Prism from 'prismjs'
import Vue from 'vue'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-elixir.js'

// Include the line numbers plugin: (optional)
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const prism = Vue.component('prism', {
  props: {
    lang: {
      type: String,
      default: 'js'
    }
  },
  mounted () {
    // Prism.highlightAll()
  },
  template: '<div class="prism"><pre class="line-numbers show-language" :class="`language-${lang}`"><code><slot></slot></code></pre></div>'
})
