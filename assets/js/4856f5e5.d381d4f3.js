"use strict";(self.webpackChunkhss_docs=self.webpackChunkhss_docs||[]).push([[283],{769:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(7855),r=a(7294),s=a(7019);function i(e){var t=e.tag,a=e.addTag;return r.createElement("kbd",{className:"tag",onClick:function(){return a(t)}},t)}function l(e){var t=e.data,a=e.addTag;return r.createElement("li",null,"pattern is ",t.pattern," / hss is ",t.hss," [",t.tags.map((function(e){return r.createElement(i,{key:e,tag:e,addTag:a})})),"]")}function u(e){var t=e.examples,a=e.addTag;return r.createElement("ul",null,t.map((function(e){return r.createElement(l,{key:e.id,data:e,addTag:a})})))}for(var d,c=JSON.parse('{"C":[{"id":"rec5ohdmhNSqSHQnq","fields":{"hss":"1124","pattern":"5","tags":["solo","medium"],"id":6},"createdTime":"2022-01-05T13:14:41.000Z"},{"id":"recMfJVOHao8O5MWh","fields":{"manual_settings":"dwellmax=false;","hss":"114","pattern":"3","alternate-notations":"snake","tags":["medium","duo"],"id":4},"createdTime":"2022-01-05T13:03:16.000Z"},{"id":"recPEmu5ksRoqEFWT","fields":{"manual_settings":"bps=2.8;","hss":"13","pattern":"42","alternate-notations":"galloped 423","tags":["solo","hard","galloped"],"id":5},"createdTime":"2022-01-05T13:13:15.000Z"},{"id":"recUaG6vU4Ema3DCE","fields":{"hss":"3","pattern":"726","tags":["multi","easy"],"id":2},"createdTime":"2022-01-05T12:21:04.000Z"},{"id":"recZt3USt9xu50Ibt","fields":{"manual_settings":"body={\\n(0,-30).|(0,30).\\n};\\nhandspec=(1,)(,2);","hss":"123","pattern":"5","tags":["easy","duo"],"id":1},"createdTime":"2022-01-05T12:21:04.000Z"},{"id":"recjfzLGluxD8YfaT","fields":{"manual_settings":"handspec=(2,1)(4,3);","hss":"426","pattern":"7","tags":["multi","hard"],"id":3},"createdTime":"2022-01-05T12:21:04.000Z"}]}').C.map((function(e){return e.fields})),o=[],f=(0,n.Z)(c);!(d=f()).done;)for(var m,p=d.value,g=(0,n.Z)(p.tags);!(m=g()).done;){var h=m.value;o.includes(h)||o.push(h)}function T(){var e=(0,r.useState)(c),t=e[0],a=e[1],i=(0,r.useRef)();function l(){return i.current.value.split(/,| /g).filter((function(e){return e.trim()}))}function d(){var e=l();console.log("searching",e);for(var t,r=c,s=function(){var e=t.value;e.trim()&&o.includes(e)&&(r=r.filter((function(t){return t.tags.includes(e)})))},i=(0,n.Z)(e);!(t=i()).done;)s();a(r)}return r.createElement(s.Z,{title:"examples"},r.createElement("input",{type:"search",ref:i,onChange:d,placeholder:"easy, duo"}),r.createElement(u,{examples:t,addTag:function(e){var t,a=l(),n=i.current;t=a.includes(e)?a.filter((function(t){return t!=e})):a.concat(e),n.value=t.join(", "),d()}}),r.createElement("p",null," ",t.length," examples "))}}}]);