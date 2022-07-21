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
import {
  openOFDBaseViewer,
  verifySignature
} from 'xmlparse_js'

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  created () {
    this.pdfFile = null
    this.file = null
  },
  mounted () {

  },
  methods: {
    onchangeFile(e) {
      openOFDBaseViewer({
        ofd: e.target.files[0],
        secret: 'kgNVVbdUZ31C6mps',
        container: document.getElementById('OfdView'),
        signaturesCallback(signatures) {
          //所有签章列表的信息
          console.log(signatures)
        },
        signatureClickCallback (evt) {
          verifySignature({
            pageRef: evt.pageRef,
            signatureId: evt.signatureId,
            signatureCallback(data) {
              //点击章的数据返回
              console.log(data)
            },
            hashFileCallback(ret) {
              //摘要验证的结果
              console.log(ret)
            }
          })
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  width: 1000px;
  height: 80vh;
}
</style>
