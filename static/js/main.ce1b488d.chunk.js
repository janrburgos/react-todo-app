(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(6),i=n.n(c),r=(n(17),n(18),n(11)),u=(n(19),n(2)),d=n(1),o=Object(u.b)((function(t){return{tasks:t.tasks}}),(function(t){return{addPendingTask:function(e){return t({type:"ADD_PENDING_TASK",payload:e})}}}))((function(t){var e=t.tasks,n=t.addPendingTask,s=Object(a.useState)(""),c=Object(r.a)(s,2),i=c[0],u=c[1],o=Object(a.useState)(""),j=Object(r.a)(o,2),l=j[0],b=j[1],O=function(){var t=i.trim().toLowerCase();return b(""),document.querySelector("input").focus(),""===t?(b("please input a valid task"),u("")):void 0!==e.find((function(e){return e.name===t}))?b("this task is already existing"):(u(""),void n(t))};return Object(d.jsxs)("div",{className:"TodoAppInput",children:[Object(d.jsx)("div",{className:"app-heading",children:Object(d.jsx)("p",{children:"New Task"})}),Object(d.jsxs)("div",{className:"app-body",children:[Object(d.jsx)("label",{htmlFor:"text",children:"Task Name"}),Object(d.jsx)("input",{onChange:function(t){u(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&O()},type:"text",id:"text",value:i}),Object(d.jsx)("div",{className:"error-message",children:l}),Object(d.jsx)("button",{onClick:function(){O()},children:"+ Add Task"})]})]})})),j=(n(25),n(26),Object(u.b)(null,(function(t){return{changeStatus:function(e){return t({type:"CHANGE_STATUS",payload:e})},deleteTask:function(e){return t({type:"DELETE_TASK",payload:e})}}}))((function(t){return Object(d.jsx)("tr",{className:"TaskRow",children:Object(d.jsxs)("td",{children:[t.task.name,"pending"===t.task.status&&Object(d.jsx)("button",{className:"check-button",onClick:function(){t.changeStatus(t.task.id)},children:"\u2713"}),Object(d.jsx)("button",{className:"bin-button",onClick:function(){return t.deleteTask(t.task.id)},children:"\ud83d\uddd1"})]})})}))),l=Object(u.b)((function(t){return{tasks:t.tasks}}),(function(t){return{addPendingTask:function(e){return t({type:"ADD_PENDING_TASK",payload:e})},deleteTask:function(e){return t({type:"DELETE_TASK",payload:e})}}}))((function(t){return 0===t.tasks.filter((function(e){return e.status===t.status})).length?Object(d.jsx)("div",{className:"TaskTable",children:Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["no ",t.status," tasks"]})})}):Object(d.jsxs)("table",{className:"TaskTable",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{children:"".concat(t.status," tasks")})})}),Object(d.jsx)("tbody",{children:t.tasks.filter((function(e){return e.status===t.status})).map((function(t){return Object(d.jsx)(j,{task:t},t.id)}))})]})})),b=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{}),Object(d.jsx)(l,{status:"pending"}),Object(d.jsx)(l,{status:"done"})]})},O=n(12),p=n(3),k=n(5),f=n(29),h={tasks:[{id:Object(f.a)(),name:"eat",status:"pending"},{id:Object(f.a)(),name:"code",status:"pending"},{id:Object(f.a)(),name:"sleep",status:"done"}]},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_PENDING_TASK":var n=Object(k.a)(t.tasks);return n.push({id:Object(f.a)(),name:e.payload,status:"pending"}),Object(p.a)(Object(p.a)({},t),{},{tasks:Object(k.a)(n)});case"DELETE_TASK":return Object(p.a)(Object(p.a)({},t),{},{tasks:Object(k.a)(t.tasks.filter((function(t){return t.id!==e.payload})))});case"CHANGE_STATUS":var a=t.tasks.find((function(t){return t.id===e.payload}));a.status="done";var s=t.tasks.filter((function(t){return t.id!==e.payload}));return s.push(a),Object(p.a)(Object(p.a)({},t),{},{tasks:Object(k.a)(s)});default:return Object(p.a)({},t)}},T=Object(O.a)(x);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u.a,{store:T,children:Object(d.jsx)(b,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.ce1b488d.chunk.js.map