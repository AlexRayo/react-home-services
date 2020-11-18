import React, { Component } from 'react';

export class StartDate extends Component {

    continue = e => {
        e.preventDefault();
        if(this.props.values.start_date !==""){
            this.props.nextStep();
        } 
      };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();      
    };

  render() {
    let today = new Date().toISOString().split('T')[0];
    //split is needed

    //función para boton de continuar, no lo muestra si no existe el valor/parámetro agregado
    function displayInline(value) {
        return  `d-none ${value ? 'd-inline-block ' : ''}`
    }
    const { values, handleChange } = this.props;


    if(values.service === "Reforma"){
        return(
            <div>
                <div className="form-group">
                    <label>¿Cuándo desea iniciar con la reforma?*</label>
                    <input className="form-control" type="date" required
                    placeholder=""
                    onChange={handleChange('start_date')}
                    defaultValue={values.start_date}
                    min={today}         
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-light mr-4"
                        onClick={this.back}
                    >Regresar</button>
      
                  <button className={displayInline(values.start_date)+"btn btn-primary"}
                    onClick={this.continue}
                  >Continuar</button>
                </div>
            </div>
        )
    }
    else{
        return(        
            <div>    
                <h4>¿Cuándo desea iniciar con el servicio?</h4>
                <div className="form-group">
                    <label>Seleccione una fecha de inicio:*</label>
                    <input className="form-control" type="date" required
                    placeholder=""
                    onChange={handleChange('start_date')}
                    defaultValue={values.start_date}
                    min={today}    
                    />
                </div>

                <div className="form-group">
                    <label>Fecha de finalización (opcional):</label>
                    <input className="form-control" type="date"
                    placeholder=""
                    onChange={handleChange('end_date')}
                    defaultValue={values.end_date}
                    min={today}              
                    />
                </div>
                <div className="form-group">
                    {values.service==="Cuido de mayores" ? (
                    <h4>¿Su mayor pacede de alguna patología o requiere de cuidado especial?</h4>
                    ) : 
                    values.service==="Niñera" ?(
                    <h4>¿Su hijo requiere de cuidado especial?</h4>
                    ):
                    values.service==="Servicios del hogar" ?(
                    <h4>¿Desea agregar algún detalle adicional sobre el servicio?</h4>
                    ): ("")}
                    <textarea className="form-control" type="date"
                    placeholder="Por favor, indiquenos acá si es necesario"
                    onChange={handleChange('note_service')}
                    defaultValue={values.note_service}              
                    />
                </div>
                
    
                <div className="form-group">
                    <button className="btn btn-light mr-4"
                        onClick={this.back}
                    >Regresar</button>
      
                  <button className={displayInline(values.start_date)+"btn btn-primary"}
                    onClick={this.continue}
                  >Continuar</button>
                </div>
                
            </div> 
        )
    }
    
        
  } 
}

export default StartDate;


