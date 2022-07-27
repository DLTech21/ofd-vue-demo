<template>
  <div id="outerContainer">

    <div id="mainContainer">

      <div id="secondaryToolbar" class="secondaryToolbar hidden doorHangerRight">
        <div id="secondaryToolbarButtonContainer">
          <button id="secondaryOpenFile" class="secondaryToolbarButton openFile visibleLargeView" title="Open File"
                  tabindex="52" data-l10n-id="open_file">
            <span data-l10n-id="open_file_label">Open</span>
          </button>

          <button id="secondaryPrint" class="secondaryToolbarButton print visibleMediumView" title="Print" tabindex="53"
                  data-l10n-id="print">
            <span data-l10n-id="print_label">Print</span>
          </button>

          <button id="documentProperties" class="secondaryToolbarButton documentProperties" title="Document Properties…"
                  tabindex="69" data-l10n-id="document_properties" aria-controls="documentPropertiesDialog">
            <span data-l10n-id="document_properties_label">Document Properties…</span>
          </button>
        </div>
      </div>  <!-- secondaryToolbar -->

      <div class="toolbar">
        <div id="toolbarContainer">
          <div id="toolbarViewer">
            <div id="toolbarViewerLeft">
              <div class="splitToolbarButton hiddenSmallView">
                <button class="toolbarButton pageUp" title="Previous Page" id="previous" tabindex="13"
                        data-l10n-id="previous">
                  <span data-l10n-id="previous_label">Previous</span>
                </button>
                <div class="splitToolbarButtonSeparator"></div>
                <button class="toolbarButton pageDown" title="Next Page" id="next" tabindex="14" data-l10n-id="next">
                  <span data-l10n-id="next_label">Next</span>
                </button>
              </div>
              <input type="number" id="pageNumber" class="toolbarField pageNumber" title="Page" value="1" size="4"
                     min="1" tabindex="15" data-l10n-id="page" autocomplete="off">
              <span id="numPages" class="toolbarLabel"></span>
            </div>
            <div id="toolbarViewerRight">

              <button id="openFile" class="toolbarButton openFile hiddenLargeView" title="Open File" tabindex="32"
                      data-l10n-id="open_file">
                <span data-l10n-id="open_file_label">Open</span>
              </button>

              <button id="print" class="toolbarButton print hiddenMediumView" title="Print" tabindex="33"
                      data-l10n-id="print">
                <span data-l10n-id="print_label">Print</span>
              </button>

              <div class="verticalToolbarSeparator hiddenSmallView"></div>

              <button id="secondaryToolbarToggle" class="toolbarButton" title="Tools" tabindex="36" data-l10n-id="tools"
                      aria-expanded="false" aria-controls="secondaryToolbar">
                <span data-l10n-id="tools_label">Tools</span>
              </button>
            </div>
            <div id="toolbarViewerMiddle">
              <div class="splitToolbarButton">
                <button id="zoomOut" class="toolbarButton zoomOut" title="Zoom Out" tabindex="21"
                        data-l10n-id="zoom_out">
                  <span data-l10n-id="zoom_out_label">Zoom Out</span>
                </button>
                <div class="splitToolbarButtonSeparator"></div>
                <button id="zoomIn" class="toolbarButton zoomIn" title="Zoom In" tabindex="22" data-l10n-id="zoom_in">
                  <span data-l10n-id="zoom_in_label">Zoom In</span>
                </button>
              </div>
              <span id="scaleSelectContainer" class="dropdownToolbarButton">
                  <select id="scaleSelect" title="Zoom" tabindex="23" data-l10n-id="zoom">
                    <option id="pageAutoOption" title="" value="auto" selected="selected"
                            data-l10n-id="page_scale_auto">Automatic Zoom</option>
                    <option id="pageActualOption" title="" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option>
                    <option id="pageFitOption" title="" value="page-fit" data-l10n-id="page_scale_fit">Page Fit</option>
                    <option id="pageWidthOption" title="" value="page-width"
                            data-l10n-id="page_scale_width">Page Width</option>
                    <option id="customScaleOption" title="" value="custom" disabled="disabled" hidden="true"></option>
                    <option title="" value="0.5" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 50 }'>50%</option>
                    <option title="" value="0.75" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 75 }'>75%</option>
                    <option title="" value="1" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 100 }'>100%</option>
                    <option title="" value="1.25" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 125 }'>125%</option>
                    <option title="" value="1.5" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 150 }'>150%</option>
                    <option title="" value="2" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 200 }'>200%</option>
                    <option title="" value="3" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 300 }'>300%</option>
                    <option title="" value="4" data-l10n-id="page_scale_percent"
                            data-l10n-args='{ "scale": 400 }'>400%</option>
                  </select>
                </span>
            </div>
          </div>
        </div>
      </div>

      <div id="viewerContainer" tabindex="0" :style="{height: containerHeight}">
        <div id="viewer" class="pdfViewer"></div>
      </div>

      <!--#if !MOZCENTRAL-->
      <div id="errorWrapper" hidden='true'>
        <div id="errorMessageLeft">
          <span id="errorMessage"></span>
          <button id="errorShowMore" data-l10n-id="error_more_info">
            More Information
          </button>
          <button id="errorShowLess" data-l10n-id="error_less_info" hidden='true'>
            Less Information
          </button>
        </div>
        <div id="errorMessageRight">
          <button id="errorClose" data-l10n-id="error_close">
            Close
          </button>
        </div>
        <div class="clearBoth"></div>
        <textarea id="errorMoreInfo" hidden='true' readonly="readonly"></textarea>
      </div>
      <!--#endif-->
    </div> <!-- mainContainer -->

    <div id="dialogContainer">
      <dialog id="documentPropertiesDialog">
        <div class="row">
          <span id="fileNameLabel" data-l10n-id="document_properties_file_name">File name:</span>
          <p id="fileNameField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="fileSizeLabel" data-l10n-id="document_properties_file_size">File size:</span>
          <p id="fileSizeField" aria-labelledby="fileSizeLabel">-</p>
        </div>
        <div class="separator"></div>
        <div class="row">
          <span id="titleLabel" data-l10n-id="document_properties_title">Title:</span>
          <p id="titleField" aria-labelledby="titleLabel">-</p>
        </div>
        <div class="row">
          <span id="authorLabel" data-l10n-id="document_properties_author">Author:</span>
          <p id="authorField" aria-labelledby="authorLabel">-</p>
        </div>
        <div class="row">
          <span id="subjectLabel" data-l10n-id="document_properties_subject">Subject:</span>
          <p id="subjectField" aria-labelledby="subjectLabel">-</p>
        </div>
        <div class="row">
          <span id="keywordsLabel" data-l10n-id="document_properties_keywords">Keywords:</span>
          <p id="keywordsField" aria-labelledby="keywordsLabel">-</p>
        </div>
        <div class="row">
          <span id="creationDateLabel" data-l10n-id="document_properties_creation_date">Creation Date:</span>
          <p id="creationDateField" aria-labelledby="creationDateLabel">-</p>
        </div>
        <div class="row">
          <span id="modificationDateLabel"
                data-l10n-id="document_properties_modification_date">Modification Date:</span>
          <p id="modificationDateField" aria-labelledby="modificationDateLabel">-</p>
        </div>
        <div class="row">
          <span id="creatorLabel" data-l10n-id="document_properties_creator">Creator:</span>
          <p id="creatorField" aria-labelledby="creatorLabel">-</p>
        </div>
        <div class="separator"></div>
        <div class="row">
          <span id="producerLabel" data-l10n-id="document_properties_producer">OFD Producer:</span>
          <p id="producerField" aria-labelledby="producerLabel">-</p>
        </div>
        <div class="row">
          <span id="versionLabel" data-l10n-id="document_properties_version">OFD Version:</span>
          <p id="versionField" aria-labelledby="versionLabel">-</p>
        </div>
        <div class="row">
          <span id="pageCountLabel" data-l10n-id="document_properties_page_count">Page Count:</span>
          <p id="pageCountField" aria-labelledby="pageCountLabel">-</p>
        </div>
        <div class="row">
          <span id="pageSizeLabel" data-l10n-id="document_properties_page_size">Page Size:</span>
          <p id="pageSizeField" aria-labelledby="pageSizeLabel">-</p>
        </div>
        <div class="separator"></div>
        <div class="row" hidden="hidden">
          <span id="linearizedLabel" data-l10n-id="document_properties_linearized">Fast Web View:</span>
          <p id="linearizedField" aria-labelledby="linearizedLabel">-</p>
        </div>
        <div class="buttonRow">
          <button id="documentPropertiesClose" class="dialogButton"><span
            data-l10n-id="document_properties_close">Close</span></button>
        </div>
      </dialog>
      <!--#if !MOZCENTRAL-->
      <dialog id="printServiceDialog" style="min-width: 200px;">
        <div class="row">
          <span data-l10n-id="print_progress_message">Preparing document for printing…</span>
        </div>
        <div class="row">
          <progress id="printProgress" value="0" max="100"></progress>
          <span data-l10n-id="print_progress_percent" data-l10n-args='{ "progress": 0 }'
                class="relative-progress">0%</span>
        </div>
        <div class="buttonRow">
          <button id="printCancel" class="dialogButton"><span data-l10n-id="print_progress_close">Cancel</span></button>
        </div>
      </dialog>

      <dialog id="signaturePropertiesDialog">
        <div class="row">
          <span id="signerLabel">签章人:</span>
          <p id="signerField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="providerLabel">签章提供者:</span>
          <p id="providerField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="hashedValueLabel">原文摘要值:</span>
          <p id="hashedValueField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="signedValueLabel">签名值:</span>
          <p id="signedValueField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="signMethodLabel">签名算法:</span>
          <p id="signMethodField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="signVersionLabel">版本号:</span>
          <p id="signVersionField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="verifyLabel">验签结果:</span>
          <p id="verifyField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="separator"></div>
        <div class="row">
          <span id="sealIDLabel">印章标识:</span>
          <p id="sealIDField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="sealNameLabel">印章名称:</span>
          <p id="sealNameField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="sealTypeLabel">印章类型:</span>
          <p id="sealTypeField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="sealAuthTimeLabel">有效时间:</span>
          <p id="sealAuthTimeField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="sealMakeTimeLabel">制章日期:</span>
          <p id="sealMakeTimeField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="row">
          <span id="sealVersionLabel">印章版本:</span>
          <p id="sealVersionField" aria-labelledby="fileNameLabel">-</p>
        </div>
        <div class="buttonRow">
          <button id="signaturePropertiesClose" class="dialogButton"><span data-l10n-id="document_properties_close">Close</span>
          </button>
        </div>
      </dialog>
      <!--#endif-->
      <!--#if CHROME-->
      <!--#include viewer-snippet-chrome-overlays.html-->
      <!--#endif-->
    </div>  <!-- dialogContainer -->

  </div> <!-- outerContainer -->
</template>
<script>
import {
  openOFDViewer,
} from 'parser_x_x.js'

export default {
  data () {
     return {
       containerHeight: 0,
     }
  },
  mounted () {
    //vue下viewerContainer必须设置height
    this.containerHeight = `${window.innerHeight - 18 - 32}px`

    const config = this.getViewerConfiguration()
    let url = this.getQueryVariable('url')
    config.url = '999.ofd'
    let img = new Image();
    img.style.position = 'absolute';
    img.style.left = 0;
    img.style.right = 0;
    img.style.margin = 'auto';
    img.style.top = 0;
    img.style.bottom = 0;
    img.src = 'data:image/gif;base64,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';
    img.draggable = false;
    config.loadingContainer = img
    config.onPageChanging = pageNumber => {
      console.log(pageNumber)
    }
    config.onPageScale = scale => {
      console.log(scale)
    }
    openOFDViewer(config)
  },

  methods: {

    getQueryVariable (variable) {
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        if (pair[0] == variable) {
          return pair[1]
        }
      }
      return (false)
    },

    getViewerConfiguration () {
      let errorWrapper = null
      errorWrapper = {
        container: document.getElementById('errorWrapper'),
        errorMessage: document.getElementById('errorMessage'),
        closeButton: document.getElementById('errorClose'),
        errorMoreInfo: document.getElementById('errorMoreInfo'),
        moreInfoButton: document.getElementById('errorShowMore'),
        lessInfoButton: document.getElementById('errorShowLess'),
      }

      return {
        appContainer: document.body,
        mainContainer: document.getElementById('viewerContainer'),
        viewerContainer: document.getElementById('viewer'),
        toolbar: {
          container: document.getElementById('toolbarViewer'),
          numPages: document.getElementById('numPages'),
          pageNumber: document.getElementById('pageNumber'),
          scaleSelect: document.getElementById('scaleSelect'),
          customScaleOption: document.getElementById('customScaleOption'),
          previous: document.getElementById('previous'),
          next: document.getElementById('next'),
          zoomIn: document.getElementById('zoomIn'),
          zoomOut: document.getElementById('zoomOut'),
          openFile: document.getElementById('openFile'),
          print: document.getElementById('print'),
        },
        secondaryToolbar: {
          toolbar: document.getElementById('secondaryToolbar'),
          toggleButton: document.getElementById('secondaryToolbarToggle'),
          toolbarButtonContainer: document.getElementById(
            'secondaryToolbarButtonContainer'
          ),
          openFileButton: document.getElementById('secondaryOpenFile'),
          printButton: document.getElementById('secondaryPrint'),
          documentPropertiesButton: document.getElementById('documentProperties'),
        },
        sidebar: {
          // Divs (and sidebar button)
          outerContainer: document.getElementById('outerContainer'),
          viewerContainer: document.getElementById('viewerContainer'),
        },
        sidebarResizer: {
          outerContainer: document.getElementById('outerContainer'),
        },
        documentProperties: {
          dialog: document.getElementById('documentPropertiesDialog'),
          closeButton: document.getElementById('documentPropertiesClose'),
          fields: {
            fileName: document.getElementById('fileNameField'),
            fileSize: document.getElementById('fileSizeField'),
            title: document.getElementById('titleField'),
            author: document.getElementById('authorField'),
            subject: document.getElementById('subjectField'),
            keywords: document.getElementById('keywordsField'),
            creationDate: document.getElementById('creationDateField'),
            modificationDate: document.getElementById('modificationDateField'),
            creator: document.getElementById('creatorField'),
            producer: document.getElementById('producerField'),
            version: document.getElementById('versionField'),
            pageCount: document.getElementById('pageCountField'),
            pageSize: document.getElementById('pageSizeField'),
            linearized: document.getElementById('linearizedField'),
          },
        },
        signatureProperties: {
          dialog: document.getElementById('signaturePropertiesDialog'),
          closeButton: document.getElementById('signaturePropertiesClose'),
          fields: {
            signer: document.getElementById('signerField'),
            provider: document.getElementById('providerField'),
            hashedValue: document.getElementById('hashedValueField'),
            signedValue: document.getElementById('signedValueField'),
            signMethod: document.getElementById('signMethodField'),
            signVersion: document.getElementById('signVersionField'),
            verify: document.getElementById('verifyField'),

            sealID: document.getElementById('sealIDField'),
            sealName: document.getElementById('sealNameField'),
            sealType: document.getElementById('sealTypeField'),
            sealAuthTime: document.getElementById('sealAuthTimeField'),
            sealMakeTime: document.getElementById('sealMakeTimeField'),
            sealVersion: document.getElementById('sealVersionField'),
          },
        },
        errorWrapper,
        printContainer: document.getElementById('printContainer'),
        openFileInputName: 'fileInput',
        secret: 'kgNVVbdUZ31C6mps',
      }
    }
  }
}
</script>
