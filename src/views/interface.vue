<template>
  <div>
    <input type="file"
           id="avatar" name="ofd文件"
           accept="ofd" @change="onchangeFile">
    <div>
      <div class="dia">

        <div id="OfdView" style="overflow:auto; position: absolute; background: #FAF9DE" class="contain"
        >

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {parseOfdDocument, getOFDPageCount, renderOfdByIndex} from "parser_x_x.js";

export default {
  name: "interface",
  created () {
    this.pdfFile = null
    this.file = null
  },
  mounted () {

  },
  methods: {
    emptyNode(node) {
      if (node) {
        while (node.firstChild) node.removeChild(node.firstChild);
      }
    },

    onchangeFile(e) {
      this.emptyNode(document.getElementById('OfdView'))
      parseOfdDocument({
        ofd: e.target.files[0],
        secret: 'kgNVVbdUZ31C6mps',
        success() {
          let count = getOFDPageCount(0)
          for (let i=0;i<count;i++) {
            renderOfdByIndex(0, i, 500).then(div => {
              document.getElementById('OfdView').appendChild(div)
            })
          }
        },
        fail(error) {
          console.log(error)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
