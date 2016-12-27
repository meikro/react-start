'use strict';
/*eslint no-console:0*/
import React from 'react';
import {Link,withRouter,setRouteLeaveHook} from 'react-router';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.routerWillLeave = this.routerWillLeave.bind(this);
    }
    state = {
        isSaved: 0
    }
    componentDidMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route, 
            this.routerWillLeave
        );
    }
    routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        if (!this.state.isSaved){
            return '确认要离开？';
        }
    }
    render () {
        return (
            <h3>This is Home page.</h3>
        );
    }
};
const H = withRouter(Home);
export default H;