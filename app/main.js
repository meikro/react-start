'use strict';
/*eslint no-console:0*/
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory ,browserHistory, IndexRoute , Redirect ,IndexRedirect} from 'react-router';
import App from './component/app';
import About from './component/about';
import Home from './component/home';
import Concat from './component/concat';
import List from './component/list';
import Form from './component/form';
//IndexRoute 默认路由
//<IndexRedirect to="/about" /> 组件用于访问根路由的时候，将用户重定向到某个子组件。
//<Redirect from="/test/concat" to="/concat" /> 重定向到 to中
/*
browserHistory 	需要后台配合，我选用hashHistory。但肯定前者更友好。
1.browserHistory 	正常路径 /about
	但是，这种情况需要对服务器改造。
	否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误。
2.hashHistory 	hash路径 	/#/about
3.createMemoryHistory
	主要用于服务器渲染。它创建一个内存中的history对象，
	不与浏览器URL互动。
*/
//每个路由都有Enter和Leave钩子，用户进入或离开该路由时触发。
/*

*/
const router = (
 	<Router history={hashHistory}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={Home}/>
			<Route path="/list/:id" component={List} />
	  		<Route path="/about" component={About} />
	      	<Route path="/concat" component={Concat} onLeave={()=>{console.log('Leave form Concat');}}/>
	      	<Route path="/form" component={Form} onEnter={()=>{console.log('Enter form page');}}/>
	      	<Redirect from="/test/concat" to="/concat" />
	    </Route>
  	</Router>
);
render(
  router,
  document.getElementById('app')
);