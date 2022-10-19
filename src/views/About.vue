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
       pdfUrl: 'https://gitee.com/ofdrw/ofdrw/raw/master/GBT_33190-2016_%E7%94%B5%E5%AD%90%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E4%B8%8E%E4%BA%A4%E6%8D%A2%E6%A0%BC%E5%BC%8F%E7%89%88%E5%BC%8F%E6%96%87%E6%A1%A3.pdf',
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
