<template>
    <ofd-view :file="ofdUrl" :mem="ofd" :sidebar-force-open="false"
              :signature-viewer-force-check="true"
              ></ofd-view>
</template>
<script>
import parser_x from 'parser_x.js'
export default {
  data () {
     return {
       isOFD: true,
       ofdUrl: '999.ofd',
       stamps: [],
       ofd: parser_x
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
