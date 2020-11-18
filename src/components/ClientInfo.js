import React, { Component } from 'react';

export class ClientInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = () => {
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    //Tiene q recibir los valores de nombre y teléfono para q se muestre el btn de continuar
    function displayInline(value, value2) {
      return  `d-none ${value && value2 ? 'd-inline-block ' : ''}`
    }
    return (
      <div className="col-11 col-md-6 py-4 mx-auto border">
        <div className="form-group">
          <label>Nombre *</label>
          <input className="form-control" type="text" required
            placeholder=""
            onChange={handleChange('name')}
            defaultValue={values.name}              
          />
        </div>

        <div className="form-group">
          <label>Teléfono *</label>
          <input className="form-control" type="number"
            placeholder=""
            onChange={handleChange('phone')}
            defaultValue={values.phone}              
          />
        </div>

        <div className="form-group">
          <label>Correo(opcional)</label>
          <input className="form-control" type="email"
            placeholder=""
            onChange={handleChange('email')}
            defaultValue={values.email}              
          />            
        </div>

        <div className="form-group">
          <label>Información adicional(opcional)</label>
          <textarea className="form-control"
            placeholder="Ejemplo: Dirección u otra información de contacto."
            onChange={handleChange('note_client')}
            defaultValue={values.note_client}              
          />
        </div>
          <button className="btn btn-light"
            onClick={this.back}
          >Regresar</button>
          <button className={displayInline(values.name, values.phone)+"btn btn-primary"}
            onClick={this.continue}
          >Continue</button>
      </div>
    );
  }
}

export default ClientInfo;
