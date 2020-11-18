import React, { Component } from 'react';
import Emoji from './utils/Emogi';

export class Fail extends Component {

  render() {
    return (
          <div>
            <h1>Ha ocurrido un error con el envío de solicitud, por favor inténtelo más tarde</h1>
            <br></br>
            <a href="https://home-services.es" className="btn btn-primary">
              <Emoji symbol="🏠"/> Regresar a la página de inicio</a>
          </div>
    );
  }
}

export default Fail;
