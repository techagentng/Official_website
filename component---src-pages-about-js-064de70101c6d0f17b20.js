(self.webpackChunkgatsby_capabay=self.webpackChunkgatsby_capabay||[]).push([[682],{3581:function(I,g,C){"use strict";C.d(g,{Z:function(){return r}});var A=C(2122),t=C(2192),e=C(6156);function i(I){return String(parseFloat(I)).length===String(I).length}function a(I){return parseFloat(I)}function M(I){return function(g,C){var A=String(g).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(A===C)return g;var t=a(g);if("px"!==A)if("em"===A)t=a(g)*a(I);else if("rem"===A)return t=a(g)*a(I),g;var e=t;if("px"!==C)if("em"===C)e=t/a(I);else{if("rem"!==C)return g;e=t/a(I)}return parseFloat(e.toFixed(5))+C}}function n(I){var g=I.size,C=I.grid,A=g-g%C,t=A+C;return g-A<t-g?A:t}function D(I){var g=I.lineHeight;return I.pixels/(g*I.htmlFontSize)}function c(I){var g=I.cssProperty,C=I.min,A=I.max,t=I.unit,i=void 0===t?"rem":t,a=I.breakpoints,M=void 0===a?[600,960,1280]:a,n=I.transform,D=void 0===n?null:n,c=(0,e.Z)({},g,"".concat(C).concat(i)),r=(A-C)/M[M.length-1];return M.forEach((function(I){var A=C+r*I;null!==D&&(A=D(A)),c["@media (min-width:".concat(I,"px)")]=(0,e.Z)({},g,"".concat(Math.round(1e4*A)/1e4).concat(i))})),c}function r(I){var g=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},C=g.breakpoints,e=void 0===C?["sm","md","lg"]:C,a=g.disableAlign,r=void 0!==a&&a,o=g.factor,l=void 0===o?2:o,s=g.variants,w=void 0===s?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:s,m=(0,A.Z)({},I);m.typography=(0,A.Z)({},m.typography);var N=m.typography,u=M(N.htmlFontSize),T=e.map((function(I){return m.breakpoints.values[I]}));return w.forEach((function(I){var g=N[I],C=parseFloat(u(g.fontSize,"rem"));if(!(C<=1)){var e=C,a=1+(e-1)/l,M=g.lineHeight;if(!i(M)&&!r)throw new Error((0,t.Z)(6));i(M)||(M=parseFloat(u(M,"rem"))/parseFloat(C));var o=null;r||(o=function(I){return n({size:I,grid:D({pixels:4,lineHeight:M,htmlFontSize:N.htmlFontSize})})}),N[I]=(0,A.Z)({},g,c({cssProperty:"fontSize",min:a,max:e,unit:"rem",breakpoints:T,transform:o}))}})),m}},7761:function(I,g,C){"use strict";var A=C(2122),t=C(7294),e=C(496),i=C(4427),a=C(8089);g.Z=function(I){var g=I.children,C=I.theme,M=(0,i.Z)(),n=t.useMemo((function(){var I=null===M?C:function(I,g){return"function"==typeof g?g(I):(0,A.Z)({},I,g)}(M,C);return null!=I&&(I[a.Z]=null!==M),I}),[C,M]);return t.createElement(e.Z.Provider,{value:n},g)}},6096:function(I,g,C){"use strict";C.r(g),C.d(g,{default:function(){return w}});var A=C(7294),t=C(5967),e=(C(3751),C(920)),i=C(838),a=C(101),M=C(3581),n=C(7761),D=C(453),c=(C(9286),C(4868)),r=(0,a.Z)();r=(0,M.Z)(r);var o=(0,e.Z)((function(){var I,g;return{TypographyText:(I={color:"black",fontWeight:500,fontFamily:["-appleMacSystemFont","sans-serif"].join(","),paddingBottom:40,fontSize:"2rem",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"130px",left:"43%"},I[r.breakpoints.down("md")]={fontSize:"1rem",position:"absolute",top:"65px",right:"0",fontWeight:700},I),h3:(g={fontSize:"2rem"},g[r.breakpoints.down("sm")]={fontSize:"1rem"},g)}})),l=function(I){I.location;var g=o();return A.createElement(i.Z,{container:!0,className:"gridCont"},A.createElement(i.Z,{item:!0,className:"gridItem",xs:12},A.createElement(n.Z,{theme:r},A.createElement(D.Z,{variant:"h1",gutterBottom:!0,className:g.TypographyText},"Why data maters"))),A.createElement(i.Z,{item:!0,className:"itemLower h",sm:6,xs:6},A.createElement("img",{src:c.Z})),A.createElement(i.Z,{item:!0,className:"itemLower2 h",sm:6,xs:6},A.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEzMXB4IiBoZWlnaHQ9IjE4NXB4IiB2aWV3Qm94PSIwIDAgMTMxIDE4NSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+YnVpbGRpbmctc3VuPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZyBpZD0iRGVza3RvcC1SNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4NCiAgICAgICAgPGcgaWQ9IjIuMS1XaHktY29sbGVnZS1tYXR0ZXJzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA1MS4wMDAwMDAsIC0zODYuMDAwMDAwKSIgc3Ryb2tlPSIjNTZDMkMxIiBzdHJva2Utd2lkdGg9IjIiPg0KICAgICAgICAgICAgPGcgaWQ9ImMyLjAuZC1oZXJvLTNyZC1sZXZlbC1pbGx1c3RyYXRpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Imhlcm8taWxsdXN0cmF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjI0LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYnVpbGRpbmctc3VuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDUyLjAwMDAwMCwgNDMuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYnVpbGRpbmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzMy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU3Ryb2tlLTEiIHBvaW50cz0iMCAxNTAgMjQgMTUwIDI0IDE4IDAgMTgiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksNjUgQzE5LDY4Ljg2NiAxNS44NjYsNzIgMTIsNzIgQzguMTM0LDcyIDUsNjguODY2IDUsNjUgQzUsNjEuMTM0IDguMTM0LDU4IDEyLDU4IEMxNS44NjYsNTggMTksNjEuMTM0IDE5LDY1IFoiIGlkPSJTdHJva2UtMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTdHJva2UtNCIgcG9pbnRzPSIxMiAwIDAgMTggMjQgMTgiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsMzMgQzEwLDMxLjYxOSA4Ljg4MSwzMC41IDcuNSwzMC41IEM2LjExOSwzMC41IDUsMzEuNjE5IDUsMzMgTDUsNDIgTDEwLDQyIEwxMCwzMyBaIiBpZD0iU3Ryb2tlLTUiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksMzMgQzE5LDMxLjYxOSAxNy44ODEsMzAuNSAxNi41LDMwLjUgQzE1LjExOSwzMC41IDE0LDMxLjYxOSAxNCwzMyBMMTQsNDIgTDE5LDQyIEwxOSwzMyBaIiBpZD0iU3Ryb2tlLTYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSw1MCBMMjMsNTAiIGlkPSJTdHJva2UtNyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDEzMiBMMjMsMTMyIiBpZD0iU3Ryb2tlLTgiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMSwyMyBMMjMsMjMiIGlkPSJTdHJva2UtOSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iU3Ryb2tlLTEwIiBwb2ludHM9IjEyIDYxIDEyIDY1IDE1IDY4Ij48L3BvbHlsaW5lPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCw4MiBDMTQsODAuODk2IDEzLjEwNCw4MCAxMiw4MCBDMTAuODk2LDgwIDEwLDgwLjg5NiAxMCw4MiBMMTAsODggTDE0LDg4IEwxNCw4MiBaIiBpZD0iU3Ryb2tlLTExIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LDEwMSBDMTQsOTkuODk2IDEzLjEwNCw5OSAxMiw5OSBDMTAuODk2LDk5IDEwLDk5Ljg5NiAxMCwxMDEgTDEwLDEwNyBMMTQsMTA3IEwxNCwxMDEgWiIgaWQ9IlN0cm9rZS0xMiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCwxMTkgQzE0LDExNy44OTYgMTMuMTA0LDExNyAxMiwxMTcgQzEwLjg5NiwxMTcgMTAsMTE3Ljg5NiAxMCwxMTkgTDEwLDEyNSBMMTQsMTI1IEwxNCwxMTkgWiIgaWQ9IlN0cm9rZS0xMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Mi4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LDMzLjUgQzQ1LDM5Ljg1MTI4NTcgMzkuODUxMjg1Nyw0NSAzMy41LDQ1IEMyNy4xNDg3MTQzLDQ1IDIyLDM5Ljg1MTI4NTcgMjIsMzMuNSBDMjIsMjcuMTQ4NzE0MyAyNy4xNDg3MTQzLDIyIDMzLjUsMjIgQzM5Ljg1MTI4NTcsMjIgNDUsMjcuMTQ4NzE0MyA0NSwzMy41IFoiIGlkPSJTdHJva2UtMSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCwyMiBMMzQsMCIgaWQ9IlN0cm9rZS0zIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LDY3IEwzNCw0NSIgaWQ9IlN0cm9rZS01Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5LDIzIEwyMSwzIiBpZD0iU3Ryb2tlLTciPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDYsNjQgTDM4LDQ0IiBpZD0iU3Ryb2tlLTkiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzgsMjMgTDQ2LDMiIGlkPSJTdHJva2UtMTEiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEsNjQgTDI5LDQ0IiBpZD0iU3Ryb2tlLTEzIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LDMzIEw2NywzMyIgaWQ9IlN0cm9rZS0xNSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDMzIEwyMiwzMyIgaWQ9IlN0cm9rZS0xNyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Miw0MiBMNTcsNTciIGlkPSJTdHJva2UtMTkiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsMTAgTDI1LDI1IiBpZD0iU3Ryb2tlLTIxIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ0LDM4IEw2NCw0NiIgaWQ9IlN0cm9rZS0yMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIxIEwyMywyOSIgaWQ9IlN0cm9rZS0yNSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNSw0MiBMMTAsNTciIGlkPSJTdHJva2UtMjciPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTcsMTAgTDQyLDI1IiBpZD0iU3Ryb2tlLTI5Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIzLDM4IEwzLDQ2IiBpZD0iU3Ryb2tlLTMxIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY0LDIxIEw0NCwyOSIgaWQ9IlN0cm9rZS0zMyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"})),A.createElement(i.Z,{item:!0,className:"itemText",md:6,xs:12},A.createElement(n.Z,{theme:r},A.createElement(D.Z,{gutterBottom:!0,className:g.h3},"Data is gold, the reason for the trends on it"),A.createElement(D.Z,{variant:"body",gutterBottom:!0,className:g.textBody},"College isn’t just a place to learn. It’s where you’ll find a community filled with new people and have new experiences. It’s where you’ll make friends for life and learn important lessons about yourself. It's where you'll go to reach new heights."))),A.createElement(i.Z,{item:!0,className:"item-space",xs:6}))},s=(0,e.Z)((function(I){return{}})),w=function(I){s();return A.createElement(A.Fragment,null,A.createElement(t.Z,null,A.createElement(l,null)))}},4868:function(I,g,C){"use strict";g.Z=C.p+"static/manBall-5331b212ba823bf21147d08034f37aa1.svg"}}]);
//# sourceMappingURL=component---src-pages-about-js-064de70101c6d0f17b20.js.map