<template>
  <div style="height: 100%">
    <ofd-view :url="ofdUrl" v-if="isOFD"></ofd-view>
    <pdf-view :url="pdfUrl" v-else></pdf-view>
  </div>

</template>
<script>

export default {
  data () {
     return {
       isOFD: true,
       pdfUrl: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
       ofdUrl: 'https://gitee.com/ofdrw/ofdrw/raw/master/ofdrw-converter/src/test/resources/999.ofd'
     }
  },

  created() {
  },

  mounted () {
  },

  methods: {
  }
}
</script>
