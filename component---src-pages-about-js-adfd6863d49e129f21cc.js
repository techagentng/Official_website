(self.webpackChunkgatsby_capabay=self.webpackChunkgatsby_capabay||[]).push([[682],{3581:function(g,I,C){"use strict";C.d(I,{Z:function(){return s}});var A=C(2122),e=C(2192),t=C(6156);function i(g){return String(parseFloat(g)).length===String(g).length}function a(g){return parseFloat(g)}function n(g){return function(I,C){var A=String(I).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(A===C)return I;var e=a(I);if("px"!==A)if("em"===A)e=a(I)*a(g);else if("rem"===A)return e=a(I)*a(g),I;var t=e;if("px"!==C)if("em"===C)t=e/a(g);else{if("rem"!==C)return I;t=e/a(g)}return parseFloat(t.toFixed(5))+C}}function o(g){var I=g.size,C=g.grid,A=I-I%C,e=A+C;return I-A<e-I?A:e}function r(g){var I=g.lineHeight;return g.pixels/(I*g.htmlFontSize)}function c(g){var I=g.cssProperty,C=g.min,A=g.max,e=g.unit,i=void 0===e?"rem":e,a=g.breakpoints,n=void 0===a?[600,960,1280]:a,o=g.transform,r=void 0===o?null:o,c=(0,t.Z)({},I,"".concat(C).concat(i)),s=(A-C)/n[n.length-1];return n.forEach((function(g){var A=C+s*g;null!==r&&(A=r(A)),c["@media (min-width:".concat(g,"px)")]=(0,t.Z)({},I,"".concat(Math.round(1e4*A)/1e4).concat(i))})),c}function s(g){var I=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},C=I.breakpoints,t=void 0===C?["sm","md","lg"]:C,a=I.disableAlign,s=void 0!==a&&a,M=I.factor,l=void 0===M?2:M,m=I.variants,D=void 0===m?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:m,u=(0,A.Z)({},g);u.typography=(0,A.Z)({},u.typography);var w=u.typography,d=n(w.htmlFontSize),y=t.map((function(g){return u.breakpoints.values[g]}));return D.forEach((function(g){var I=w[g],C=parseFloat(d(I.fontSize,"rem"));if(!(C<=1)){var t=C,a=1+(t-1)/l,n=I.lineHeight;if(!i(n)&&!s)throw new Error((0,e.Z)(6));i(n)||(n=parseFloat(d(n,"rem"))/parseFloat(C));var M=null;s||(M=function(g){return o({size:g,grid:r({pixels:4,lineHeight:n,htmlFontSize:w.htmlFontSize})})}),w[g]=(0,A.Z)({},I,c({cssProperty:"fontSize",min:a,max:t,unit:"rem",breakpoints:y,transform:M}))}})),u}},7761:function(g,I,C){"use strict";var A=C(2122),e=C(7294),t=C(496),i=C(4427),a=C(8089);I.Z=function(g){var I=g.children,C=g.theme,n=(0,i.Z)(),o=e.useMemo((function(){var g=null===n?C:function(g,I){return"function"==typeof I?I(g):(0,A.Z)({},g,I)}(n,C);return null!=g&&(g[a.Z]=null!==n),g}),[C,n]);return e.createElement(t.Z.Provider,{value:o},I)}},1524:function(g,I,C){"use strict";C.r(I),C.d(I,{default:function(){return D}});var A=C(7294),e=C(5967),t=(C(3751),C(920)),i=C(838),a=C(101),n=C(3581),o=C(453),r=C(7761),c=(C(9286),C(4868)),s=(C.p,(0,a.Z)());s=(0,n.Z)(s);var M=(0,t.Z)((function(){var g,I;return{h3:(g={fontSize:"2rem"},g[s.breakpoints.down("xs")]={fontSize:"1.5rem"},g),stickyIcons:(I={height:"200px",width:"40px",position:"fixed",right:"0",top:"150px"},I.height="200px",I.backgroundColor="green",I.display="flex",I.flexDirection="column",I)}})),l=function(g){g.location;var I=M();return A.createElement(A.Fragment,null,A.createElement(i.Z,{container:!0,className:"gridCont"},A.createElement("div",{className:I.stickyIcons}),A.createElement(i.Z,{item:!0,className:"itemLower h",sm:6,xs:6},A.createElement("img",{src:c.Z})),A.createElement(i.Z,{item:!0,className:"itemLower2 h",sm:6,xs:6},A.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEzMXB4IiBoZWlnaHQ9IjE4NXB4IiB2aWV3Qm94PSIwIDAgMTMxIDE4NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+YnVpbGRpbmctc3VuPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZyBpZD0iRGVza3RvcC1SNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4NCiAgICAgICAgPGcgaWQ9IjIuMS1XaHktY29sbGVnZS1tYXR0ZXJzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA1MS4wMDAwMDAsIC0zODYuMDAwMDAwKSIgc3Ryb2tlPSIjNTZDMkMxIiBzdHJva2Utd2lkdGg9IjIiPg0KICAgICAgICAgICAgPGcgaWQ9ImMyLjAuZC1oZXJvLTNyZC1sZXZlbC1pbGx1c3RyYXRpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Imhlcm8taWxsdXN0cmF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjI0LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYnVpbGRpbmctc3VuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDUyLjAwMDAwMCwgNDMuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYnVpbGRpbmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzMy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU3Ryb2tlLTEiIHBvaW50cz0iMCAxNTAgMjQgMTUwIDI0IDE4IDAgMTgiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksNjUgQzE5LDY4Ljg2NiAxNS44NjYsNzIgMTIsNzIgQzguMTM0LDcyIDUsNjguODY2IDUsNjUgQzUsNjEuMTM0IDguMTM0LDU4IDEyLDU4IEMxNS44NjYsNTggMTksNjEuMTM0IDE5LDY1IFoiIGlkPSJTdHJva2UtMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTdHJva2UtNCIgcG9pbnRzPSIxMiAwIDAgMTggMjQgMTgiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsMzMgQzEwLDMxLjYxOSA4Ljg4MSwzMC41IDcuNSwzMC41IEM2LjExOSwzMC41IDUsMzEuNjE5IDUsMzMgTDUsNDIgTDEwLDQyIEwxMCwzMyBaIiBpZD0iU3Ryb2tlLTUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksMzMgQzE5LDMxLjYxOSAxNy44ODEsMzAuNSAxNi41LDMwLjUgQzE1LjExOSwzMC41IDE0LDMxLjYxOSAxNCwzMyBMMTQsNDIgTDE5LDQyIEwxOSwzMyBaIiBpZD0iU3Ryb2tlLTYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSw1MCBMMjMsNTAiIGlkPSJTdHJva2UtNyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDEzMiBMMjMsMTMyIiBpZD0iU3Ryb2tlLTgiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSwyMyBMMjMsMjMiIGlkPSJTdHJva2UtOSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iU3Ryb2tlLTEwIiBwb2ludHM9IjEyIDYxIDEyIDY1IDE1IDY4Ij48L3BvbHlsaW5lPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCw4MiBDMTQsODAuODk2IDEzLjEwNCw4MCAxMiw4MCBDMTAuODk2LDgwIDEwLDgwLjg5NiAxMCw4MiBMMTAsODggTDE0LDg4IEwxNCw4MiBaIiBpZD0iU3Ryb2tlLTExIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LDEwMSBDMTQsOTkuODk2IDEzLjEwNCw5OSAxMiw5OSBDMTAuODk2LDk5IDEwLDk5Ljg5NiAxMCwxMDEgTDEwLDEwNyBMMTQsMTA3IEwxNCwxMDEgWiIgaWQ9IlN0cm9rZS0xMiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCwxMTkgQzE0LDExNy44OTYgMTMuMTA0LDExNyAxMiwxMTcgQzEwLjg5NiwxMTcgMTAsMTE3Ljg5NiAxMCwxMTkgTDEwLDEyNSBMMTQsMTI1IEwxNCwxMTkgWiIgaWQ9IlN0cm9rZS0xMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Mi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LDMzLjUgQzQ1LDM5Ljg1MTI4NTcgMzkuODUxMjg1Nyw0NSAzMy41LDQ1IEMyNy4xNDg3MTQzLDQ1IDIyLDM5Ljg1MTI4NTcgMjIsMzMuNSBDMjIsMjcuMTQ4NzE0MyAyNy4xNDg3MTQzLDIyIDMzLjUsMjIgQzM5Ljg1MTI4NTcsMjIgNDUsMjcuMTQ4NzE0MyA0NSwzMy41IFoiIGlkPSJTdHJva2UtMSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCwyMiBMMzQsMCIgaWQ9IlN0cm9rZS0zIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LDY3IEwzNCw0NSIgaWQ9IlN0cm9rZS01Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5LDIzIEwyMSwzIiBpZD0iU3Ryb2tlLTciPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDYsNjQgTDM4LDQ0IiBpZD0iU3Ryb2tlLTkiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzgsMjMgTDQ2LDMiIGlkPSJTdHJva2UtMTEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEsNjQgTDI5LDQ0IiBpZD0iU3Ryb2tlLTEzIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LDMzIEw2NywzMyIgaWQ9IlN0cm9rZS0xNSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDMzIEwyMiwzMyIgaWQ9IlN0cm9rZS0xNyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Miw0MiBMNTcsNTciIGlkPSJTdHJva2UtMTkiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsMTAgTDI1LDI1IiBpZD0iU3Ryb2tlLTIxIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ0LDM4IEw2NCw0NiIgaWQ9IlN0cm9rZS0yMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIxIEwyMywyOSIgaWQ9IlN0cm9rZS0yNSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNSw0MiBMMTAsNTciIGlkPSJTdHJva2UtMjciPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTcsMTAgTDQyLDI1IiBpZD0iU3Ryb2tlLTI5Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIzLDM4IEwzLDQ2IiBpZD0iU3Ryb2tlLTMxIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDIxIEw0NCwyOSIgaWQ9IlN0cm9rZS0zMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"})),A.createElement(i.Z,{item:!0,className:"itemText",md:12,xs:12},A.createElement(o.Z,{gutterBottom:!0,className:I.h3},"What is CapacityBay"),A.createElement(r.Z,{theme:s},A.createElement(o.Z,{variant:"body",gutterBottom:!0,className:I.textBody},"Welcome to Capacity Bay, Inc., the practical and hands-on eLearning platform and organization established to revolutionize learning and workforce development training for U. S. Veterans, transitioning service members, New Americans, immigrants, refugees as well as others in areas of substantial unemployment and technology deprived communities such as sub-Sahara Africa and other parts of the world. We also provide integrated IT consulting services for individuals, businesses and government agencies."))),A.createElement(i.Z,{item:!0,className:"itemText",md:12,xs:12},A.createElement(r.Z,{theme:s},A.createElement(o.Z,{gutterBottom:!0,className:I.h3},"Our History"),A.createElement(o.Z,{variant:"body",gutterBottom:!0,className:I.textBody},"Capacity Bay, Inc. began in 2014 with the vision of its founder Obi Nwachukwu to empower individuals and communities for in-demand employments by simplifying and making easy how learning online and hands-on in a practical way from the comfort of your home or office can benefit individuals and organizations—maximizing group training, promoting personalized development and more."),A.createElement(o.Z,{variant:"body",gutterBottom:!0,className:I.textBody},"Since its formation, Capacity Bay, Inc. has made meaningful strides as an innovative leader in the areas of information technology training."))),A.createElement(i.Z,{item:!0,className:"itemText itemText2",md:12,xs:12},A.createElement(r.Z,{theme:s},A.createElement(o.Z,{gutterBottom:!0,className:I.h3},"Vision"),A.createElement(o.Z,{variant:"body",gutterBottom:!0,className:I.textBody},"Our vision is not only to create information technology jobs and careers for people in transition and poverty but to facilitate economic and social opportunity for them and their families."))),A.createElement(i.Z,{item:!0,className:"itemText",md:12,xs:12},A.createElement(r.Z,{theme:s},A.createElement(o.Z,{gutterBottom:!0,className:I.h3},"Mission"),A.createElement(o.Z,{variant:"body",gutterBottom:!0,className:I.textBody},"The Mission of Capacity Bay, Inc. is simple: build the capacity of U. S. Veterans, transitioning service members, New Americans, immigrants, refugees as well as others living in areas of substantial unemployment and technology deprived communities such as sub-Sahara Africa and other parts of the world.")))),A.createElement("div",{class:"clear"}))},m=(0,t.Z)((function(g){return{}})),D=function(g){m();return A.createElement(A.Fragment,null,A.createElement(e.Z,null,A.createElement(l,null)))}},4868:function(g,I,C){"use strict";I.Z=C.p+"static/manBall-5331b212ba823bf21147d08034f37aa1.svg"}}]);
//# sourceMappingURL=component---src-pages-about-js-adfd6863d49e129f21cc.js.map