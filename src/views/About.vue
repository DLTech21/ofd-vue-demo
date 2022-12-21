<template>
    <ofd-view :file="ofdUrl" :mem="mem" :stamps="stamps" :sidebar-force-open="false"
              :signature-viewer-force-check="true" v-if="isOFD"
              ></ofd-view>
</template>
<script>
const ofdJs = require('ofd.js')
export default {
  data () {
     return {
       isOFD: true,
       ofdUrl: '999.ofd',
       stamps: [],
       mem: ofdJs
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
