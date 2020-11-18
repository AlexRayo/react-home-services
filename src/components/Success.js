import React, { Component } from 'react';
import Emoji from './utils/Emogi';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
          <div>
            <h1>Gracias por su solicitud</h1>
            <p>Pronto nos podrémos en contacto con usted.</p>
            <br></br>
            <a href="https://home-services.es" className="btn btn-primary">
              <Emoji symbol="🏠"/> Regresar a la página de inicio</a>
          </div>
    );
  }
}

export default Success;
