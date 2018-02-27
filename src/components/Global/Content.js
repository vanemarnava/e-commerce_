// Dependencies
import React, { Component } from 'react';
// validar children
import PropTypes from 'prop-types';

// assets
import '../Global/css/Content.css';

class Content extends Component {
	static propTypes = {
		body: PropTypes.object.isRequired
	};

	//cuando el state cambia, se actualiza en render() 
  render() {
  	const { body } = this.props;
    return (
      <div className="Content">
    		{ body }
      </div>
    );
  }
}

export default Content;
