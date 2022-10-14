<template>
  <ofd-view @configCallback="configCallback" ></ofd-view>
</template>
<script>
import {
  openOFDViewer
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
    },

  }
}
</script>
