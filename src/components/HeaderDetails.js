import React, { Component } from 'react';

export class HeaderDetails extends Component {
  
  render() {
    function displayBlock(value) {
        return  `d-none ${value ? 'd-block ' : ''}`
    }
    const {
      values: {service, workday, start_date, end_date, note_service}
    } = this.props;

    return (
        <div className="bg-light px-2 py-1 mb-2">
            <p className={displayBlock(service)+"font-weight-bold text-center text-uppercase"}>Ha Elegido:</p>
            
            <div className={displayBlock(service)}>
                <p className=""><strong>Servicio:</strong> {service}</p>
            </div>

            <div className={displayBlock(workday)}>
                <p className=""><strong>Jornada laboral:</strong> {workday}</p>
            </div>
            <div className={displayBlock(start_date)}>
                <p className=""><strong>Fecha de inicio:</strong> {start_date}</p>
            </div>
            <div className={displayBlock(end_date)}>
                <p className=""><strong>Fecha de finalización:</strong> {end_date}</p>
            </div>
            <div className={displayBlock(note_service)}>
                <p className=""><strong>Detalle de la jornada:</strong> {note_service}</p>
            </div>
        </div>
    );
  }
}

export default HeaderDetails;
