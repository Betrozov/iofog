(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return E});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(160),c=n.n(s),l=n(161),u=n(159),m=n.n(u),p=n(165),f=n(162),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=(this.props.data.allMarkdownRemark||{}).edges||[];return i.a.createElement(l.a,null,i.a.createElement("div",{className:"container"},i.a.createElement(c.a,{title:"Documentation | "+m.a.siteTitle}),i.a.createElement(f.a,{postEdges:e})),i.a.createElement(p.a,null))},t}(o.Component);t.default=d;var E="3940509606"},162:function(e,t,n){"use strict";n(57),n(83),n(84);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(43),c=(n(163),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.frontmatter.type+t.node.fields.slug,title:t.node.frontmatter.title})}),e},n.render=function(){var e=this.getPostList();return i.a.createElement("div",{className:"post-menu"},e.map(function(e){return i.a.createElement(s.Link,{activeClassName:"active",to:e.path,key:e.title},e.title)}))},t}(i.a.Component));t.a=c},163:function(e,t,n){},165:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(43),c=(n(166),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("section",{className:"edgeworx"},i.a.createElement("section",{className:"container"},i.a.createElement("section",{className:"row align-items-center"},i.a.createElement("section",{className:"col-md-8"},i.a.createElement("h5",null,"Looking for an enterprise solution?"),i.a.createElement("h3",null,"Run software at the edge with Edgeworx."),i.a.createElement(s.Link,{className:"button",to:"/"},"Learn More")),i.a.createElement("section",{className:"col-md-4"},i.a.createElement("img",{src:"/images/img-gallery-02.png",alt:""})))))},t}(o.Component));t.a=c},166:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-documentation-jsx-936db66fd4ee482c87dd.js.map