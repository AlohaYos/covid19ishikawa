(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{440:function(t,e,r){var content=r(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("958aea08",content,!0,{sourceMap:!1})},441:function(t,e,r){var content=r(442);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("7c06aa28",content,!0,{sourceMap:!1})},442:function(t,e,r){(e=r(13)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table thead tr:last-child th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table thead tr th{color:rgba(0,0,0,.6)}.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--light.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table tbody tr:not(:last-child) td:last-child,.theme--light.v-data-table tbody tr:not(:last-child) th:last-child{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table tbody tr.active{background:#f5f5f5}.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 rgba(255,255,255,.12)}.theme--dark.v-data-table thead tr:last-child th{border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table thead tr th{color:rgba(255,255,255,.7)}.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--dark.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) th:last-child{border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table tbody tr.active{background:#505050}.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{max-width:100%}.v-data-table table{width:100%;border-spacing:0}.v-data-table td,.v-data-table th{padding:0 16px}.v-data-table th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table th{text-align:left}.v-application--is-rtl .v-data-table th{text-align:right}.v-data-table td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto !important}.v-data-table__progress .v-progress-linear{position:absolute}.v-data-table__progress th{height:auto !important;border:none !important;padding:0;position:relative}.v-data-table--dense td{height:24px}.v-data-table--dense th{height:32px}.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header thead th{border-bottom:0px !important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header thead tr:nth-child(2) th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}",""]),t.exports=e},490:function(t,e,r){"use strict";r(17),r(9),r(7),r(6),r(10);var d=r(3),o=(r(40),r(441),r(5)),l=r(41),n=r(34);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(n.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o.e)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},504:function(t,e,r){"use strict";var d=r(440);r.n(d).a},505:function(t,e,r){(e=r(13)(!1)).push([t.i,".Contacts-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}.Contacts-Card{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:1px}.Contacts-Card-Table th{font-size:14px !important}.Contacts-Card-Table tr:hover{background:#fff !important}@media screen and (min-width: 769px){.Contacts-Card-Table tbody tr{height:96px}}@media screen and (max-width: 768px){.Contacts-Card-Table thead{display:none}.Contacts-Card-Table tbody tr{height:auto}.Contacts-Card-Table tbody tr .content{font-weight:bold;border-bottom:none !important;padding-top:12px;padding-bottom:8px}.Contacts-Card-Table tbody tr .bureau{border-bottom:none !important}.Contacts-Card-Table tbody tr .tel{padding-bottom:12px}.Contacts-Card-Table tbody td{height:auto}.Contacts-Card-Table td{display:block}}",""]),t.exports=e},638:function(t,e,r){"use strict";r.r(e);var d=r(1).a.extend({head:function(){return{title:this.$t("お問い合わせ先一覧")}}}),o=(r(504),r(15)),l=r(47),n=r.n(l),h=r(490),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Contacts"},[r("h2",{staticClass:"Contacts-Heading"},[t._v("\n    "+t._s(t.$t("お問い合わせ先一覧"))+"\n  ")]),t._v(" "),r("div",{staticClass:"Contacts-Card"},[r("v-simple-table",{staticClass:"Contacts-Card-Table",scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("お問い合わせ内容")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("局名")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("電話番号")))])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticClass:"content"},[t._v(t._s(t.$t("サイト全般に関すること")))]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("政策企画局")))]),t._v(" "),r("td",{staticClass:"tel"},[r("a",{attrs:{href:"tel:03-5388-2171"}},[t._v("03-5388-2171")])])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v("\n              "+t._s(t.$t("サイトの技術面に関すること"))),r("br"),t._v(t._s(t.$t("オープンデータ、オープンソースに関すること"))+"\n            ")]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("戦略政策情報推進本部")))]),t._v(" "),r("td",{staticClass:"tel"},[r("a",{attrs:{href:"tel:03-5320-7930"}},[t._v("03-5320-7930")])])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v("\n              "+t._s(t.$t("新型コロナウイルス感染症対策本部会議に関すること"))),r("br"),t._v(t._s(t.$t("都庁来庁者データに関すること"))+"\n            ")]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("総務局")))]),t._v(" "),r("td",{staticClass:"tel"},[t._v("\n              "+t._s(t.$t("感染症対策本部会議に関すること"))),r("br"),r("a",{attrs:{href:"tel:03-5320-7891"}},[t._v("03-5388-7891")]),r("br"),t._v("\n              "+t._s(t.$t("都庁来庁者データに関すること"))),r("br"),r("a",{attrs:{href:"tel:03-5388-2319"}},[t._v("03-5388-2319")])])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v("\n              "+t._s(t.$t("都公式ホームページに関すること"))),r("br"),t._v(t._s(t.$t("都公式SNSアカウントに関すること"))+"\n            ")]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("生活文化局")))]),t._v(" "),r("td",{staticClass:"tel"},[t._v("\n              "+t._s(t.$t("都公式ホームページに関すること"))),r("br"),r("a",{attrs:{href:"tel:03-5388-3061"}},[t._v("03-5388-3061")]),r("br"),t._v("\n              "+t._s(t.$t("都公式SNSアカウントに関すること"))),r("br"),r("a",{attrs:{href:"tel:03-5388-3094"}},[t._v("03-5388-3094")])])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v("\n              "+t._s(t.$t("中小企業支援、テレワークに関すること"))+"\n            ")]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("産業労働局")))]),t._v(" "),r("td",{staticClass:"tel"},[t._v("\n              "+t._s(t.$t("資金繰りに関すること"))),r("br"),r("a",{attrs:{href:"tel:03-5320-4877"}},[t._v("03-5320-4877")]),r("br"),t._v("\n              "+t._s(t.$t("経営に関すること"))),r("br"),r("a",{attrs:{href:"tel:03-3251-7881"}},[t._v("03-3251-7881")]),r("br"),t._v("\n              "+t._s(t.$t("労働関係に関すること"))),r("br"),r("a",{attrs:{href:"tel:0570-00-6110"}},[t._v("0570-00-6110")])])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v("\n              "+t._s(t.$t("新型コロナウイルス感染症の予防・検査・医療に関すること"))+"\n            ")]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("福祉保健局")))]),t._v(" "),r("td",{staticClass:"tel"},[r("a",{attrs:{href:"tel:0570-550-571"}},[t._v("0570-550-571")]),r("br"),t._v("\n              "+t._s(t.$t("（新型コロナコールセンター）"))+"\n            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v(t._s(t.$t("都立学校に関すること")))]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("教育庁")))]),t._v(" "),r("td",{staticClass:"tel"},[r("a",{attrs:{href:"tel:03-5320-6705"}},[t._v("03-5320-6705")])])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v(t._s(t.$t("スムーズビズに関すること")))]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("都市整備局")))]),t._v(" "),r("td",{staticClass:"tel"},[r("a",{attrs:{href:"tel:03-5388-3317"}},[t._v("03-5388-3317")])])]),t._v(" "),r("tr",[r("td",{staticClass:"content"},[t._v(t._s(t.$t("都営交通に関すること")))]),t._v(" "),r("td",{staticClass:"bureau"},[t._v(t._s(t.$t("交通局")))]),t._v(" "),r("td",{staticClass:"tel"},[r("a",{attrs:{href:"tel:03-3816-5700"}},[t._v("03-3816-5700")]),r("br"),t._v("\n              "+t._s(t.$t("（都営交通お客様センター）"))+"\n            ")])])])]},proxy:!0}])})],1)])}),[],!1,null,null,null);e.default=component.exports;n()(component,{VSimpleTable:h.a})}}]);