// Dependencias
import React, { Component } from 'react';
// validar children
import PropTypes from 'prop-types';
// import './Global/css/App.css';

// componentes
// importa Header desde.....
import Header from './Global/Header.js';
// importa Content desde.....
import Content from './Global/Content.js';
// importa Footer desde.....
import Footer from './Global/Footer.js';

// Data
// importar los items desde...
import items from '../data/menu'

/*al Header se le puede pasar un atributo o propiedad que agregue el titulo de la pagina web. como es un objeto se coloca items entre llaves sin comillas*/
class App extends Component {
	static propTypes = {
		children: PropTypes.object.isRequired
	};
  // html que se genera
  render() {
  	const { children } = this.props;

    return (
      <div className="App">
      	
        <Header 
        	title='Vender!!'
        	items={items} 
        />
        <Content 
        	body={children} 
        />
        <Footer 
        	copyright='&copy; vender!! 2018' 
        />
      </div>
    );
  }
}

export default App;

