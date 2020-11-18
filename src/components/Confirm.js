import React, { Component } from 'react';
import axios from 'axios';
import Emoji from './utils/Emogi';

export class Confirm extends Component {
  
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    const {
      values: { 
        service,
        reform,
        workday,
        reform_detail,
        start_date,
        end_date,
        note_service,
        name,
        phone,
        email,
        email_client_send,
        note_client,
        baby_sister
      }
    } = this.props;

    axios.post('http://127.0.0.1:5000/send', {
      service : service,
      reform: reform,
      workday: workday,
      reform_detail: reform_detail,
      start_date: start_date,
      end_date: end_date,
      note_service: note_service,
      name: name,
      phone: phone,
      email: email,
      email_client_send: email_client_send,
      note_client:note_client,
      baby_sister: baby_sister
      })
        .then((res) => {
          this.props.nextStep();
            //Perform Success Action
            //console.log(this.data)
        })
        .catch((error, res) => {
            // error.response.status Check status code
            this.props.failStep();
            
        }).finally(() => {
            //Perform action in always
            //console.log(this.data)
        });
    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {values} = this.props;
    let reformas = values.reform.map(function(reforma){
      return `${reforma}, `;
  });
    return (
      <div className="bg-light px-2 py-1 mb-2 py-4">
      <p className="font-weight-bold text-center text-uppercase">Puede verificar antes de enviar:</p>
      
      <h4>Su información de contacto</h4>
      <div className="form-group">
          <p className="form-control"><strong>Nombre:</strong> {values.name}</p>
      </div>
      <div className="form-group">
          <p className="form-control"><strong>Teléfono:</strong> {values.phone}</p>
      </div>
      
      {values.email ? (
        <div className="form-group">
          <p className="form-control"><strong>Correo:</strong> {values.email}</p>
        </div>
      ):("")}     

      {/* **************** */}
      <h4 className={"border-top mt-4 pt-4"}>Datos del servicio que ha solicitado</h4>
        
      <div className="form-group">
          <p className="form-control"><strong>Servicio:</strong> {values.service}</p>
      </div>

      {values.reform.indexOf > -1 ? (
        <div className="form-group">
          <p className="form-control"><strong>Tipo de reforma:</strong> {reformas}</p>
        </div>
      ):("")}

      {values.reform_detail ? (
        <div className="form-group">
          <p className="form-control"><strong>Detalle de la reforma:</strong> {values.reform_detail}</p>
        </div>
      ):("")}

      {values.note_service ? (
          <div className="form-group">
            <p className="form-control"><strong>Detalle del servicio:</strong> {values.note_service}</p>
          </div>
      ):("")}

      {values.workday ? (
          <div className="form-group">
            <p className="form-control"><strong>Jornada laboral:</strong> {values.workday}</p>
          </div>
      ):("")}

      <div className="form-group">
          <p className="form-control"><strong>Fecha de inicio:</strong> {values.start_date}</p>
      </div>

      {values.email ? (
      <div className="form-check form-group">
          <input className="form-check-input" 
          type="checkbox" value="" id="sendme"
          onChange={()=>{ this.props.emailClientSend(values.email_client_send); console.log(values.email_client_send);}}
          defaultChecked={values.email_client_send === true  ? ("checked",true) : ("checked",false)}        
          />
        <label className="form-check-label" htmlFor="sendme">
          Enviarme una copia de la solicitud a mi correo
        </label>        
      </div>
        ):("")
      }

      <div className="form-group">
        <button className="btn btn-light mr-4 border"
          color="secondary"
          variant="contained"
          onClick={this.back}
        >Regresar</button>

        <button className="btn btn-lg btn-primary"
          color="primary"
          variant="contained"
          onClick={this.continue}
        ><Emoji symbol="↗"/>Enviar la solicitud del servicio</button>
      </div>
    </div>

    );
  }
}

export default Confirm;
