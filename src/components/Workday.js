import React, { Component } from 'react';
import Emoji from './utils/Emogi';
export class Workday extends Component {
    state = {
        isFontaneria : true,
        isPintura : true,
        isElectricidad : true,
        isConstruccion : true,
        isCesped : true,
    }

  continue = () => {
    this.props.nextStep();
  };

  back = () => {
    this.props.prevStep();
  };
  //on change reform
  onChangeReform = (value) => {
    switch (value) {
        case 'Fontanería':
            this.setState(initialState => ({
                isFontaneria: !initialState.isFontaneria,
            }));
            this.pushReformName(value, this.state.isFontaneria);
            break;
        case 'Pintura':
            this.setState(initialState => ({
                isPintura: !initialState.isPintura,
            }));
            this.pushReformName(value, this.state.isPintura);
            break;
        case 'Electricidad':
            this.setState(initialState => ({
                isElectricidad: !initialState.isElectricidad,
            }));
            this.pushReformName(value, this.state.isElectricidad);
            break;
        case 'Construcción':
            this.setState(initialState => ({
                isConstruccion: !initialState.isConstruccion,
            }));
            this.pushReformName(value, this.state.isConstruccion);
            break;
        case 'Instalación de césped':
            this.setState(initialState => ({
                isCesped: !initialState.isCesped,
            }));
            this.pushReformName(value, this.state.isCesped);
            break;
        default:
            break;
    }
  }
  
  pushReformName = (value, bool) =>{
      console.log(value + " " + bool)
    //capturamos 'reform' del componente padre
    let {reform} = this.props.values;

    //CONDICIONAL PARA HACER PUSH AL COMPONENTE PADRE
    if(bool && !reform.includes(value)){
        reform.push(value)             
    }
    else{
        let value_index = reform.indexOf(value);
        //borramos sin dejar espacio
        if (value_index > -1) {
            reform.splice(value_index, 1);
          }
    }
  }

//*************************************************************//
  render() {

    const { values, handleChange } = this.props;
    let reformas = this.props.values.reform.map(function(reforma){
        return reforma;
    });
    //función para boton de continuar, no lo muestra si no existe el valor/parámetro agregado
    function displayInline(value) {
        return  `d-none ${value ? 'd-inline-block ' : ''}`
    }
    //PARA MOSTRAR SI EL CLIENTE ELIGE 'Reforma'
    if(this.props.values.service === "Reforma"){
        return(
            <div>
                <div className="form-check form-group">
                    <input className="form-check-input" 
                    type="checkbox" value="" id="fontaneria"
                    onClick={()=>{ this.onChangeReform('Fontanería');}}
                    defaultChecked={reformas.indexOf("Fontanería") !== -1 ? ("checked",true) : ("checked",false)}
                    
                    />
                    <label className="form-check-label" htmlFor="fontaneria">
                        Fontanería
                    </label>
                </div>

                <div className="form-check form-group">
                    <input className="form-check-input" 
                    type="checkbox" value="" id="pintura"
                    onClick={()=>{ this.onChangeReform('Pintura');}}
                    defaultChecked={reformas.indexOf("Pintura") !== -1 ? ("checked",true) : ("checked",false)}
                    
                    />
                    <label className="form-check-label" htmlFor="pintura">
                        Pintura
                    </label>
                </div>

                <div className="form-check form-group">
                    <input className="form-check-input" 
                    type="checkbox" value="" id="electricidad"
                    onClick={()=>{ this.onChangeReform('Electricidad');}}
                    defaultChecked={reformas.indexOf("Electricidad") !== -1 ? ("checked",true) : ("checked",false)}
                    />
                    <label className="form-check-label" htmlFor="electricidad">
                        Electricidad
                    </label>
                </div>

                <div className="form-check form-group">
                    <input className="form-check-input" 
                    type="checkbox" value="" id="construccion"
                    onClick={()=>{ this.onChangeReform('Construcción');}}
                    defaultChecked={reformas.indexOf("Construcción") !== -1 ? ("checked",true) : ("checked",false)}
                    />
                    <label className="form-check-label" htmlFor="construccion">
                        Construcción
                    </label>
                </div>

                <div className="form-check form-group">
                    <input className="form-check-input" 
                    type="checkbox" value="" id="cesped"
                    onClick={()=>{ this.onChangeReform('Instalación de césped');}}
                    defaultChecked={reformas.indexOf("Instalación de césped") !== -1 ? ("checked",true) : ("checked",false)}
                    />
                    <label className="form-check-label" htmlFor="cesped">
                        Instalación de césped
                    </label>
                </div>

                <div className="form-group">
                <h4>Detalle adicional sobre la reforma</h4>
                <textarea className="form-control" type="date"
                    placeholder="Por favor, indiquenos acá si es necesario"
                    onChange={handleChange('reform_detail')}
                    defaultValue={values.reform_detail}
                />
                </div>
                <div className="form-group">
                    <button className="btn btn-light mr-4"
                        onClick={this.back}
                    >Regresar</button>

                  <button className={ displayInline(values.reform.length > 0 || values.reform_detail !=="")+"btn btn-primary"}
                    onClick={this.continue}
                  >Continuar</button>
                </div>
            </div>
        )
    }
    //PARA MOSTRAR JORNADAS LABORALES DE LOS OTROS SERVICIO
    else{
        return (
            <div>
                <h4>¿Por cuánto tiempo desea solicitar el servicio?</h4>
            
                <div className="form-group">
                    <button className="btn btn-light mr-4"
                    onClick={()=>{this.props.workDay('10 horas'); this.continue();}}
                    ><Emoji symbol="⏳"/> 10 Horas</button>
                </div>

                <div className="form-group">
                    <button className="btn btn-light mr-4"
                    onClick={()=>{this.props.workDay('+ 10 horas');this.continue();}}
                    ><Emoji symbol="⏳"/> +10 Horas</button>
                </div>

                <div className="form-group">
                    <button className="btn btn-light mr-4"
                    onClick={()=>{this.props.workDay('1 mes');this.continue();}}
                    ><Emoji symbol="⏳"/> 1 Mes</button>
                </div>

                <div className="form-group">
                    <button className="btn btn-light mr-4"
                    onClick={()=>{this.props.workDay('+2 meses');this.continue();}}
                    ><Emoji symbol="⏳"/> Más de 2 Meses</button>
                </div>

                <div className="form-group">
                    <button className="btn btn-light mr-4"
                    onClick={()=>{this.props.workDay('Indefinida'); this.continue();}}
                    ><Emoji symbol="⏳"/> Indefinida</button>
                </div>

                <button className="btn btn-light"
                onClick={this.back}
                >Back</button>

                <button className={ `d-none ${this.props.values.workday ? 'd-inline btn btn-primary' : ''}`}
                    onClick={()=>{ if(this.props.values.workday !==""){ this.continue() } } }          
                >Continuar</button>
        </div>
        )
    }
        
  } 
}


export default Workday;