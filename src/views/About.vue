<template>
  <ofd-view @configCallback="configCallback" ></ofd-view>
</template>
<script>
import {
  openOFDViewer,
  openOFD
} from 'ofd.js'

export default {
  data () {
     return {
     }
  },

  created() {
  },

  mounted () {
  },

  methods: {
    configCallback(config) {
      openOFDViewer(config)
      // 打开url方式
      openOFD('https://gitee.com/ofdrw/ofdrw/raw/master/ofdrw-converter/src/test/resources/999.ofd')
    },

  }
}
</script>
