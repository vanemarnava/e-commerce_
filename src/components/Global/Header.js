// Dependencies
import React, { Component } from 'react';
// validacion que ayuda a definir que propiedades debemos recibir, de que tipo y ver si son necesarias/requeridas o no.
import PropTypes from 'prop-types';
// metodo link, para crear enlaces, reemplaza a las etiquetas <a>
import { Link } from 'react-router-dom';

// assets
// importar el logo desde...
// import logo from './img/future-logo.png';
// importar estilo css de Header desde...
import '../Global/css/Header.css';



class Header extends Component {
  // objeto
  static propTypes = {
    // escribir los props que se van a recibir
    // el titulo es requerido, forzosamente debe mandarse el titulo, de lo contrario react mandara un error.
    title: PropTypes.string.isRequired,
    // itemd del menu (menu.js)
    items: PropTypes.array.isRequired
  };

  render() {
    // forma de obtener los props
    const {title, items} = this.props;

    // equivalente por separado:
    // const title = this.props.title;
    // const items = this.props.items;

    /*dentro del ul con className  
    // agregar items por medio de li
    // si el items esta inicializado, se crea el metodo map, que recibe una funcion. el key es para que react tenga contro en los elementos que se estan creando.*/
    
    return (
    <section>
    <div className="container-fluid Header">
      <div className="row"> 

        <div className="col-md-1">
          <h3>{title}</h3>
        </div>

        <div className="col-md-1">                
            <input type="text" className="form-control" placeholder="Search" />
            <button type="submit" className="btn btn-default">Submit</button>

        </div>

      </div>    

      <div className="row">
        <div className="col-md-12 theMenu text-center">
          <ul className='Menu'>
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)
            }
          </ul>
        </div>
      </div>
    </div> 
    </section>

    );
  }
}

export default Header;

