(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-372a3f61"],{"50f1":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"animated fadeIn"},[e("b-card",{attrs:{"header-tag":"header"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("b-row",[e("b-col",[e("i",{staticClass:"icon-drop"}),t._v(" This is Tpl\n        ")]),e("b-col",{staticClass:"text-right"},[e("b-dropdown",{staticClass:"m-0 p-0",attrs:{text:"View Source"}},t._l(["/src/components/ComTest1/TestTableSimple.vue","/src/_nav.js","/src/store/Count.js"],function(t,n){return e("b-dropdown-item",{key:n,staticClass:"p-0"},[e("com-vs2",{attrs:{"file-path-link":t}})],1)}),1)],1)],1)],1),e("b-card-body",[e("b-row",[e("button",{on:{click:function(n){return t.on_add()}}},[t._v("add")]),e("b-table",{attrs:{striped:"",hover:"",small:"",items:[{id:1,ten:"thuc 101",que_quan:"QN"},{id:2,ten:"thuc 101",que_quan:"QN"},{id:3,ten:"thuc 101",que_quan:"QN"}],fields:["id","ten","que_quan","cmd"]},scopedSlots:t._u([{key:"cmd",fn:function(n){return[e("button",{on:{click:function(e){return t.on_edit(n)}}},[e("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})]),e("button",{on:{click:function(e){return t.on_del(n)}}},[e("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])]}}])})],1),e("b-modal",{ref:"myModalRef",attrs:{"hide-footer":"",title:0==t.sel.id?"Form Add":"Form Edit"}},[e("div",{staticClass:"d-block"},[e("div",{staticClass:"frm text-right"},[e("h4",[t._v("This is form")]),e("div",[t._v(t._s(t.sel))]),0!=t.sel.id?e("button",{on:{click:function(n){return t.on_update()}}},[t._v("update")]):t._e(),0==t.sel.id?e("button",{on:{click:function(n){return t.on_do_add()}}},[t._v("add")]):t._e(),e("button",{on:{click:function(n){return t.on_cancel()}}},[t._v("cancel")])])])])],1)],1)],1)},s=[],a=(e("20d6"),e("7f7f"),{name:"TestTableSimple.vue",components:{},data:function(){return{name:"".concat(this.$options.name),sel:{}}},methods:{on_add:function(){this.sel={id:0},this.$refs.myModalRef.show()},on_del:function(t){var n=this.items.findIndex(function(n){return n.id==t.item.id});this.items.splice(n,1)},on_edit:function(t){this.sel=JSON.parse(JSON.stringify(t.item)),this.$refs.myModalRef.show()},on_update:function(){var t=Object.assign({},this.sel);alert(JSON.stringify(t)),this.on_cancel()},on_cancel:function(){this.sel={},this.$refs.myModalRef.hide()}}}),o=a,c=e("2877"),r=Object(c["a"])(o,i,s,!1,null,null,null);n["default"]=r.exports},"7f7f":function(t,n,e){var i=e("86cc").f,s=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in s||e("9e1e")&&i(s,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-372a3f61.13b0e698.js.map