/* eslint-disable */
import Prism from 'prismjs'
import Vue from 'vue'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-elixir.js'

// Include the line numbers plugin: (optional)
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const prism = Vue.component('Prism', {
  props: {
    lang: {
      type: String,
      default: 'js'
    }
  },
  template: '<div class="prism"><pre class="line-numbers show-language" :class="`language-${lang}`"><code><slot/></code></pre></div>'
})
/* eslint-enable */
