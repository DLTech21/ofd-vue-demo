<template>
    <ofd-view :file="ofdUrl" :mem="ofd" :sidebar-force-open="false"
              :signature-viewer-force-check="true"
              ></ofd-view>
</template>
<script>

export default {
  data () {
     return {
       isOFD: true,
       ofdUrl: '999.ofd',
       stamps: [],
       ofd: require('parser_x.js'),
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
