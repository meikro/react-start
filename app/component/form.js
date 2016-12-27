'use strict';
/*eslint no-console:0*/
import React from 'react';
import {Link , browserHistory , contextTypes} from 'react-router';
class Form extends React.Component {
    constructor(props){
        super(props);
        //不要在render中绑定，会造成性能损耗
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount () {
        console.log('mount');
    }
    componentWillUnmount () {
        console.log('un mount');
    }
    /*form处理方法一*/ //需要后台配合
    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/form/sign/${userName}/${repo}`;
        browserHistory.push(path);
    }
    /*form处理方法二*/ //需要后台配合
    static contextTypes = {
        router: React.PropTypes.object
    }
    handleSubmit_1 = (event) =>{ //与constructor
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/form/sign/${userName}/${repo}`;
        this.context.router.push(path);
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/>
              <input type="text" placeholder="repo"/>
              <button type="submit">Go</button>
            </form>
        );
    }
};
export default Form;