// Dependencies
import React, { Component } from 'react';
// validacion que ayuda a definir que propiedades debemos recibir, de que tipo y ver si son necesarias/requeridas o no.
import PropTypes from 'prop-types';

// assets
// importar estilo css de Footer desde...
import '../Global/css/Footer.css';

class Footer extends Component {

	 static propTypes = {
    // escribir los props que se van a recibir
    // el copyright no es requerido, por lo tanto no marcara error si no se manda.
    copyright: PropTypes.string.isRequired
  };

  /*el 'dangerouslySetInnerHTML={{__html: copyright}}' es una funcionalidad de react, funciona para imprimir react de forma no segura. para reemplazar <p>{copyright}</p>  */

  render() {
  	// como no es obligatorio mandarlo se pone un valor por defecto. si no se manda un valor o no existe, se tomara el valor por defecto y eso sera lo que se imprimira.(se imprimira exactamente con el & y no transformado porque esta determinado de que es un string.)
  	const { copyright = '&copy: React 2018'} = this.props;
    return (
      <div className="Footer">
          <p className="footer-title">{copyright}</p>
      </div>
    );
  }
}

export default Footer;
