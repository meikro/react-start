import React from 'react';
import {Link , IndexLink} from 'react-router';
class App extends React.Component {
    render () {
        return (
            <div>
                <h1>React Router Demo</h1>
                <hr />
                <p>
                    by <a href="http://baidu.com/" target="_blank">baidu.com</a>
                </p>
                <ul>
                    <li><IndexLink to="/">Home</IndexLink></li>
                    <li><Link to="/list/15">list/15</Link></li>
                    <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
                    <li><Link to="test/concat" activeClassName="active">Concat</Link></li>
                    <li><Link to="/form" activeClassName="active">Form</Link></li>
                </ul>
                嵌套组件：{this.props.children}
            </div>
        );
    }
};
export default App;