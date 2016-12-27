import React from 'react';
class List extends React.Component {
  	render () {
    	return (
      		<div>
       			<h3>This is List page.list/<b style={{color: 'red'}}>{this.props.params.id}</b></h3>
      		</div>
    	);
  	}
};
export default List;