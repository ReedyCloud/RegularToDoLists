(window["webpackJsonpregular-todo-list-spa"]=window["webpackJsonpregular-todo-list-spa"]||[]).push([[0],{19:function(t,e,n){t.exports={NewTask:"NewTask_NewTask__1kv47",NewTaskButtonClosed:"NewTask_NewTaskButtonClosed__3po9b",NewTaskButtonOpened:"NewTask_NewTaskButtonOpened__24n3Z",NewTaskCreator:"NewTask_NewTaskCreator__1-yVx",NewTaskButton:"NewTask_NewTaskButton__MVDDG"}},23:function(t,e,n){t.exports={Xx:"X_Xx__mhir8",Line1:"X_Line1__23OJj",Line2:"X_Line2__1GA5f"}},24:function(t,e,n){t.exports={Container:"Login_Container__1lEj5",Form:"Login_Form__1qSkZ"}},27:function(t,e,n){t.exports={Task:"Task_Task__3FfIQ",TaskDeleteButton:"Task_TaskDeleteButton__1ya3E"}},28:function(t,e,n){t.exports={ListTitle:"FullList_ListTitle__3Us4z",FullList:"FullList_FullList__1yI4p",ListState:"FullList_ListState__8MLt9"}},31:function(t,e,n){t.exports={NavigationItem:"NavigationItem_NavigationItem__2gRaD",active:"NavigationItem_active__3IZQx"}},32:function(t,e,n){t.exports={Toolbar:"Toolbar_Toolbar__1xX3s",Logo:"Toolbar_Logo__3lAkE"}},46:function(t,e,n){t.exports={ListState:"ListState_ListState__1jQI_"}},48:function(t,e,n){t.exports=n.p+"static/media/Logo.885bbaab.png"},49:function(t,e,n){t.exports={NavigationItems:"NavigationItems_NavigationItems__3SjI6"}},50:function(t,e,n){t.exports={NewList:"NewList_NewList__1t4Au"}},51:function(t,e,n){t.exports={btnDelete:"Button_btnDelete__3lTgw",btnOpen:"Button_btnOpen__3d7PH",btnNewList:"Button_btnNewList__Pahb6",btnCreateList:"Button_btnCreateList__2IhNB"}},52:function(t,e,n){t.exports={List:"List_List__gdDVr",d:"List_d__3hbYu"}},53:function(t,e,n){t.exports={Loader:"Spinner_Loader__147Lx",load4:"Spinner_load4__9JTZa"}},54:function(t,e,n){t.exports={Lists:"Lists_Lists___01cL"}},55:function(t,e,n){t.exports={ListCreator:"ListCreator_ListCreator__HL-hi",enter:"ListCreator_enter__2n7-F"}},56:function(t,e,n){t.exports={Backdrop:"Backdrop_Backdrop__3aCvu",enter:"Backdrop_enter__SJxpf"}},57:function(t,e,n){t.exports=n(86)},66:function(t,e,n){},67:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(21),i=n.n(o),s=n(18),c=n(7),l=n(17),u=n(44),p=(n(66),n(67),n(2)),d=n(3),m=n(5),f=n(4),g=n(6),h=n(16),b=function(){return localStorage.getItem("jwt")},v=n(45),O=n.n(v).a.create({baseURL:"/api/"}),y=n(13),E=n(23),k=n.n(E),_=function(){return a.a.createElement("div",{className:k.a.Xx},a.a.createElement("div",{className:k.a.Line1}),a.a.createElement("div",{className:k.a.Line2}))},T=n(27),j=n.n(T);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var w=function(t){function e(){var t,n;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).state={taskId:null,toDoListId:null,name:"",description:"",priority:0,state:0},n}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{onDragStart:this.props.onDragStart,draggable:!0,className:j.a.Task,style:{backgroundColor:"rgb(255,"+(255-10.5*this.state.priority)+","+(255-25.5*this.state.priority)+")"}},a.a.createElement("button",{className:j.a.TaskDeleteButton,onClick:function(){return t.props.onTaskDelete(t.state.id)}},a.a.createElement(_,null)),a.a.createElement("h2",null," ",this.props.name),a.a.createElement("p",null,this.props.description))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(n,!0).forEach((function(e){Object(y.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{priority:t.priority,id:t.id})}}]),e}(a.a.Component),D=Object(c.b)(null,(function(t){return{onTaskDelete:function(e){return t(function(t){return function(e){var n=b();O.delete("todo/DeleteTodoItem?todoItemId="+t,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(){e({type:"UPDATE_TASKS"})}))}}(e))}}}))(w),S=n(19),N=n.n(S);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var P=function(t){function e(){var t,n;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).state={toDoListId:null,name:"",description:"",priority:1,state:0,creatingTask:!1},n.creatingTaskHandler=function(){var t=n.state.creatingTask;n.setState({creatingTask:!t})},n.postTaskHandler=function(){var t={TodoListId:n.state.toDoListId,Name:n.state.name,Description:n.state.description,Priority:n.state.priority,Status:n.state.state};n.props.onTaskCreated(t)},n.postTaskValidation=function(){var t=!0;n.state.name.length<3&&(t=!1),t&&Number.isInteger(parseInt(n.state.priority,10))&&(n.postTaskHandler(),n.setState({creatingTask:!1,name:"",description:"",priority:1}))},n}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this,e=a.a.createElement("div",{onClick:this.creatingTaskHandler,className:N.a.NewTaskButtonClosed},"New Task ");return this.state.creatingTask&&(e=a.a.createElement("div",{onClick:this.creatingTaskHandler,className:N.a.NewTaskButtonOpened},"Close ")),a.a.createElement("div",{className:N.a.NewTask},e,this.state.creatingTask?a.a.createElement("div",{className:N.a.NewTaskCreator},a.a.createElement("h4",null,"Title:"),a.a.createElement("input",{type:"text",placeholder:"my name",value:this.state.name,onChange:function(e){return t.setState({name:e.target.value})},required:!0}),a.a.createElement("h4",null,"Description:"),a.a.createElement("textarea",{type:"text",placeholder:"optional",value:this.state.description,onChange:function(e){return t.setState({description:e.target.value})},required:!0}),a.a.createElement("h4",null,"Priority:"),a.a.createElement("input",{type:"text",placeholder:"my prio",value:this.state.priority,onChange:function(e){return t.setState({priority:e.target.value})},required:!0}),a.a.createElement("button",{onClick:this.postTaskValidation,className:N.a.NewTaskButton},"Create")):null)}}],[{key:"getDerivedStateFromProps",value:function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(y.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{toDoListId:t.listId})}}]),e}(a.a.Component),I=Object(c.b)(null,(function(t){return{onTaskCreated:function(e){return t(function(t){return function(e){var n=b();O.post("todo/AddTodoItem",t,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(){e({type:"UPDATE_TASKS"})}))}}(e))}}}))(P),x=n(28),A=n.n(x),B=n(46),F=n.n(B),U=function(t){return a.a.createElement("div",{className:F.a.ListState,onDragOver:t.onDragOver,onDrop:t.onDrop},a.a.createElement("div",null,a.a.createElement("h3",null," ",t.status),t.children,t.tasks))},G=function(t){function e(){var t,n;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).componentDidUpdate=function(){n.props.loading&&n.props.onGetTasks(n.props.match.params.id)},n.onDragStart=function(t,e){t.dataTransfer.setData("id",e)},n.onDragOver=function(t){t.preventDefault()},n.onDrop=function(t,e){var r=b(),a={toDo:0,workInProgress:1,finished:2},o=t.dataTransfer.getData("id"),i=n.props.tasks.filter((function(t){return t.id===Number.parseInt(o)&&(t.status=e,O.put("todo/ChangeStatus?todoItemId="+t.id+"&status="+a[t.status],null,{headers:{Authorization:"Bearer ".concat(r)}})),t}));n.setState({tasks:i})},n.tasksUpdateHandler=function(){n.setState({loading:!0})},n}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.props.onGetTasks(this.props.match.params.id)}},{key:"render",value:function(){var t=this,e={toDo:[],workInProgress:[],finished:[]};return this.props.tasks.forEach((function(n){e[n.status].push(a.a.createElement(D,{updateTasks:t.tasksUpdateHandler,description:n.description,priority:n.priority,name:n.name,onDragStart:function(e){return t.onDragStart(e,n.id)},id:n.id,key:n.id}))})),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:A.a.ListTitle},this.props.match.params.title),a.a.createElement("div",{className:A.a.FullList},a.a.createElement(U,{status:"To Do:",tasks:e.toDo,onDragOver:function(e){return t.onDragOver(e)},onDrop:function(e){t.onDrop(e,"toDo")}},a.a.createElement(I,{listId:this.props.match.params.id,tasksUpdate:this.tasksUpdateHandler})),a.a.createElement(U,{status:"Work in Poggers:",tasks:e.workInProgress,onDragOver:function(e){return t.onDragOver(e)},onDrop:function(e){t.onDrop(e,"workInProgress")}}),a.a.createElement(U,{status:"Finished:",tasks:e.finished,onDragOver:function(e){return t.onDragOver(e)},onDrop:function(e){t.onDrop(e,"finished")}})))}}]),e}(a.a.Component),z=Object(c.b)((function(t){return{tasks:t.tasks.tasks,loading:t.tasks.loading}}),(function(t){return{onGetTasks:function(e){return t(function(t){return function(e){var n=b();O.get("todo/GetTodoList?todoListId="+t,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){var n=[];(n=t.data.todoItems.map((function(t){return{id:t.id,name:t.name,description:t.description,priority:t.priority,status:t.status,key:t.id}}))).forEach((function(t){switch(t.status){case 0:t.status="toDo";break;case 1:t.status="workInProgress";break;case 2:t.status="finished"}})),e({type:"GET_TASKS",tasks:n})}))}}(e))}}}))(Object(h.f)(G)),R=n(48),H=n.n(R),M=n(31),X=n.n(M),W=function(t){return a.a.createElement("div",{className:X.a.NavigationItem},a.a.createElement(s.b,{to:t.link,activeClassName:X.a.active,exact:t.exact},t.children))},q=n(49),J=n.n(q),K=function(){return a.a.createElement("nav",{className:J.a.NavigationItems},a.a.createElement(W,{link:"/logged/lists",exact:!0},"Lists"),a.a.createElement(W,{link:"/logged/settings"},"Setting"),a.a.createElement(W,{link:"/logged/logout"},"Logout"))},V=n(32),Z=n.n(V),Q=function(){return a.a.createElement("div",{className:Z.a.Toolbar},a.a.createElement("img",{className:Z.a.Logo,src:H.a,alt:""}),a.a.createElement(K,null))},Y=n(50),$=n.n(Y),tt=n(51),et=n.n(tt),nt=function(t){return a.a.createElement("button",{className:et.a[t.btnType],onClick:t.clicked},t.children)},rt=Object(c.b)(null,(function(t){return{onListCreate:function(){return t({type:"CREATE_LIST"})}}}))((function(t){return a.a.createElement("div",{className:$.a.NewList},a.a.createElement("h2",null,"New List"),a.a.createElement(nt,{btnType:"btnNewList",clicked:t.onListCreate},"Create"))})),at=n(52),ot=n.n(at),it=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:ot.a.List},a.a.createElement(nt,{btnType:"btnDelete",clicked:this.props.listDelete}," Delete "),a.a.createElement("h2",null,this.props.title),a.a.createElement("div",null,a.a.createElement(nt,{btnType:"btnOpen",clicked:this.props.clicked}," Open ")))}}]),e}(a.a.Component),st=n(53),ct=n.n(st),lt=function(){return a.a.createElement("div",{className:ct.a.Loader},"Loading...")},ut=n(54),pt=n.n(ut),dt=n(55),mt=n.n(dt),ft=n(56),gt=n.n(ft),ht=function(t){return a.a.createElement("div",{className:gt.a.Backdrop,onClick:t.clicked})},bt=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ht,{clicked:this.props.onListCreateCancel}),a.a.createElement("div",{className:mt.a.ListCreator},a.a.createElement("h3",null,"Name Me!"),a.a.createElement("input",{type:"text",placeholder:"my name",value:this.props.title,onChange:function(e){return t.props.onSetListTitle(e.target.value)},required:!0}),a.a.createElement(nt,{clicked:function(){return t.props.onListCreated(t.props.title)},btnType:"btnCreateList"},"Create")))}}]),e}(a.a.Component),vt=Object(c.b)((function(t){return{title:t.lists.title,creating:t.lists.creating}}),(function(t){return{onSetListTitle:function(e){return t(function(t){return{type:"SET_LIST_TITLE",title:t}}(e))},onListCreateCancel:function(){return t({type:"CREATE_LIST_CANCEL"})},onListCreated:function(e){return t(function(t){return function(e){var n=b(),r={title:t};O.post("todo/AddTodoList",r,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(){e({type:"LISTS_UPDATE"})}))}}(e))}}}))(bt),Ot=function(t){function e(){var t,n;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).componentDidUpdate=function(){n.props.loading&&n.props.onGetLists()},n.listSelectHandler=function(t,e){n.props.history.push({pathname:"lists/"+t+"/"+e})},n}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){this.props.onGetLists()}},{key:"render",value:function(){var t=this,e=null;0===this.props.lists.length&&(e=a.a.createElement(lt,null)),this.props.loading||(e=this.props.lists.map((function(e){return a.a.createElement(it,{key:e.id,title:e.title,clicked:function(){return t.listSelectHandler(e.id,e.title)},listDelete:function(){return t.props.onListDelete(e.id)}})})));var n=null;this.props.creating&&(n=a.a.createElement(vt,null));var r=null;return this.props.loading||(r=a.a.createElement(rt,null)),a.a.createElement("div",{className:pt.a.Lists},e,r,n)}}]),e}(a.a.Component),yt=Object(c.b)((function(t){return{lists:t.lists.lists,creating:t.lists.creating,loading:t.lists.loading}}),(function(t){return{onGetLists:function(){return t((function(t){var e=b();O.get("todo/GetTodoLists",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var n;n=e.data.map((function(t){return{id:t.id,title:t.title,status:t.status,key:t.id}})),t({type:"GET_LISTS",lists:n})}))}))},onListDelete:function(e){return t(function(t){return function(e){var n=b();O.delete("todo/DeleteTodoList?todoListId="+t,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(){e({type:"LISTS_UPDATE"})}))}}(e))}}}))(Ot),Et=function(t){return a.a.createElement("div",{style:{paddingTop:"300px",textAlign:"center"}},"Work in Progrss")},kt=n(24),_t=n.n(kt),Tt=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this,e=a.a.createElement("div",{className:_t.a.Form},a.a.createElement("div",null,"Login"),a.a.createElement("form",{onSubmit:function(e){return t.props.onLoginUser(e,t.props.email,t.props.password,t.props)}},a.a.createElement("label",null,"email/login"),a.a.createElement("input",{type:"text",name:"email",onChange:function(e){return t.props.onSetEmail(e.target.value)},value:this.props.email}),a.a.createElement("label",null,"password"),a.a.createElement("input",{type:"password",name:"email",onChange:function(e){return t.props.onSetPassword(e.target.value)},value:this.props.password}),a.a.createElement("button",null,"Login")),a.a.createElement("p",null,"Dont have an account ",a.a.createElement("span",{onClick:this.props.onSetLogin},"Register here")),a.a.createElement("div",{style:{fontSize:"13px"}},"for testing: login: demo, password: demo"));return this.props.login||(e=a.a.createElement("div",{className:_t.a.Form},a.a.createElement("div",null,"Register"),a.a.createElement("form",{onSubmit:function(e){return t.props.onRegisterUser(e,t.props.email,t.props.password)}},a.a.createElement("label",null,"email/login"),a.a.createElement("input",{type:"text",name:"email",onChange:function(e){return t.props.onSetEmail(e.target.value)},value:this.props.email}),a.a.createElement("label",null,"password"),a.a.createElement("input",{type:"password",name:"email",onChange:function(e){return t.props.onSetPassword(e.target.value)},value:this.props.password}),a.a.createElement("button",null,"Register")),a.a.createElement("p",null,"Already having an account ",a.a.createElement("span",{onClick:this.props.onSetLogin},"Login here")),a.a.createElement("div",{style:{fontSize:"13px"}},"for testing: login: demo, password: demo"))),a.a.createElement("div",{className:_t.a.Container},e)}}]),e}(a.a.Component),jt=Object(c.b)((function(t){return{email:t.login.email,password:t.login.password,login:t.login.login}}),(function(t){return{onSetEmail:function(e){return t(function(t){return{type:"SET_EMAIL",email:t}}(e))},onSetPassword:function(e){return t(function(t){return{type:"SET_PASSWORD",password:t}}(e))},onSetLogin:function(){return t({type:"SET_LOGIN"})},onLoginUser:function(e,n,r,a){return t(function(t,e,n,r){return t.preventDefault(),function(){O.post("auth/login",{email:e,password:n}).then((function(t){localStorage.setItem("jwt",t.data.token),r.history.push("/logged/lists")}))}}(e,n,r,a))},onRegisterUser:function(e,n,r){return t(function(t,e,n){return t.preventDefault(),function(){O.post("auth/register",{email:e,password:n}).catch((function(){return alert("uzytkownik juz istnieje")}))}}(e,n,r))}}}))(Tt),Lt=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=b();t||this.props.history.push("/"),O.get("/getUser",{headers:{Authorization:"Bearer ".concat(t)}})}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(a.a.Component),wt=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){localStorage.removeItem("jwt"),this.props.history.push("/")}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null)}}]),e}(a.a.Component),Dt=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h.c,null,a.a.createElement(h.a,{path:"/",exact:!0,component:jt}),a.a.createElement(h.a,{path:"/logged",component:Lt},a.a.createElement(Q,null),a.a.createElement(h.a,{path:"/logged/settings",component:Et}),a.a.createElement(h.a,{path:"/logged/logout",component:wt}),a.a.createElement(h.a,{path:"/logged/lists",exact:!0,component:yt}),a.a.createElement(h.a,{path:"/logged/lists/:id/:title",exact:!0,component:z}))))}}]),e}(a.a.Component);var St=function(){return a.a.createElement(Dt,null)};function Nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Nt(n,!0).forEach((function(e){Object(y.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Pt={email:"",password:"",login:!0},It=function(t,e){return Ct({},t,{email:e.email})},xt=function(t,e){return Ct({},t,{password:e.password})},At=function(t){return Ct({},t,{login:!t.login})},Bt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_EMAIL":return It(t,e);case"SET_PASSWORD":return xt(t,e);case"SET_LOGIN":return At(t);default:return t}};function Ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ft(n,!0).forEach((function(e){Object(y.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ft(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Gt={lists:[],creating:!1,loading:!0,title:""},zt=function(t,e){return Ut({},t,{lists:e.lists,loading:!1})},Rt=function(t){return Ut({},t,{creating:!0})},Ht=function(t){return Ut({},t,{creating:!1})},Mt=function(t,e){return Ut({},t,{title:e.title})},Xt=function(t){return Ut({},t,{creating:!1,loading:!0,title:""})},Wt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_LISTS":return zt(t,e);case"CREATE_LIST":return Rt(t);case"CREATE_LIST_CANCEL":return Ht(t);case"SET_LIST_TITLE":return Mt(t,e);case"LISTS_UPDATE":return Xt(t);default:return t}};function qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?qt(n,!0).forEach((function(e){Object(y.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Kt={tasks:[],loading:!0},Vt=function(t,e){return Jt({},t,{tasks:e.tasks,loading:!1})},Zt=function(t){return Jt({},t,{loading:!0})},Qt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TASKS":return Vt(t,e);case"UPDATE_TASKS":return Zt(t)}return t};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Yt=l.d,$t=Object(l.c)({login:Bt,lists:Wt,tasks:Qt}),te=Object(l.e)($t,Yt(Object(l.a)(u.a))),ee=a.a.createElement(c.a,{store:te},a.a.createElement(s.a,null,a.a.createElement(St,null)));i.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.0d7fe78b.chunk.js.map