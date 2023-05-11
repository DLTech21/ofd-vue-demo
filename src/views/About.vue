<template>
    <ofd-view :file="ofdUrl"  :sidebar-force-open="false"
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
