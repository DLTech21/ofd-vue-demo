<template>
  <div style="height: 100%">
    <ofd-view @configCallback="configCallback" v-if="isOFD"></ofd-view>
    <pdf-view :url="pdfUrl" v-else></pdf-view>
  </div>

</template>
<script>
import {
  openOFDViewer,
  openOFD
} from 'ofd.js'

export default {
  data () {
     return {
       isOFD: false,
       pdfUrl: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
       ofdUrl: 'https://gitee.com/ofdrw/ofdrw/raw/master/ofdrw-converter/src/test/resources/999.ofd'
     }
  },

  created() {
  },

  mounted () {
  },

  methods: {
    configCallback(config) {
      openOFDViewer(config)
      // // 打开url方式
      openOFD(this.ofdUrl)
    },

  }
}
</script>
