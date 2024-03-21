# ofdview

## vue使用

### npm 安装

```
npm i ofd-view ofd.js -S
```

在 main.js 中写入以下内容：

```
import OfdView from "ofd-view";
import 'ofd-view/lib/viewer.css'

Vue.use(OfdView);
```



| 参数        | 说明                           | 是否必填 |
|-----------|------------------------------|------|
| file      | OFD文件。支持File、ArrayBuffer及url | 是    |
| mem        | 核心库，按demo方式                  | 是    |
| sidebar-force-open    | 侧边栏默认打开                      | 否    |
| signature-viewer-force-check   | 侧边栏中的签名签章默认验签                | 否    |
| water_text | 水印内容                         | 否    |
| canOpen | 是否允许通过按钮打开ofd文件              | 否    |
| canDownload | 是否允许通过按钮下载ofd文件              | 否    |
| canPrint | 是否允许通过按钮打印ofd文件              | 否    |
| onPrintFinishEvent | 通过按钮打印后的回调事件              | 否    |
| onDownloadFinishEvent | 通过按钮下载后的回调事件              | 否    |



![示例](https://cdn.jsdelivr.net/npm/ofd-view@0.1.17/img.png)
