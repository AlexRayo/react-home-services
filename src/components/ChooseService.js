import React, { Component } from 'react';
import Emoji from './utils/Emogi';

export class ChooseService extends Component {

  //Función prop UserForm para cambiar el estado del nombre del servicio y hacer next cuando se clickee un buton de cierto servicio
  pickedService = (value) =>{
    this.props.serviceName(value);
    this.props.nextStep();
  }
  continue = () => {
    this.props.nextStep();
  };
  render() {
    console.log(this.props.values.email_client_send)
    const { values} = this.props;
    //
    //SWTICH PARA EVALUAR QUE SERVICIO SE HA ELEGIDO
    switch (values.service) {
      //
      case "":
        return(
          <div>
            <PickService pickedService={this.pickedService}/>
          </div>
        );
        //
        case "Cuido de mayores":
          return (
            <div>
            {/* <h2>Eligió cuido de mayores</h2>             */}
            <PickService pickedService={this.pickedService}/>  
              <button className="btn btn-primary"
                onClick={this.continue}
              >Continuar</button>
            </div>
          );
          //
          case "Niñera":

          return (
            <div>
            {/* <h2>Eligió niñera</h2> */}
            <PickService pickedService={this.pickedService}/>  
              <button className="btn btn-primary"
                onClick={this.continue}
              >Continuar</button>
            </div>
          );
          //
          case "Servicios del hogar":

          return (
            <div>
            {/* <h2>Eligió servicios del hogar</h2> */}
            <PickService pickedService={this.pickedService}/>
  
              <button className="btn btn-primary"
                onClick={this.continue}
              >Continuar</button>
            </div>
          );
          //
          case "Reforma":
          return (
            <div>
            {/* <h2>Eligió reformas</h2> */}
            <PickService pickedService={this.pickedService}/> 
              <button className="btn btn-primary"
                onClick={this.continue}
              >Continuar</button>
            </div>
          );     
      default:
        return (
          <div>
          <h2>---</h2>
          <PickService pickedService={this.pickedService}/>  
            <button className="btn btn-primary"
              onClick={this.continue}
            >Continuar</button>
          </div>
        );
    }        
  } 
}

//COMPONENTE CON BOTONES PARA ELEGIR UN SERVICIO
export class PickService extends Component {
  render() {
    
    //  function removeReformData (){
    //     this.props.reformName("");
    //     this.props.eraseReformDetail();
    //   }
    
    return (
      <div className="form-group">

        <h4>Seleccione un servicio:</h4>

        <div className="form-group">

        <button className="btn btn-light mr-4"
            onClick={()=>{ this.props.pickedService('Cuido de mayores')}}
          ><Emoji symbol="👉"/> Cuido de mayores</button>
        </div>

        <div className="form-group">
        <button className="btn btn-light mr-4"
            onClick={()=>{this.props.pickedService('Niñera')}}
          ><Emoji symbol="👉"/> Niñera</button>
        </div>

        <div className="form-group">
        <button className="btn btn-light mr-4"
            onClick={()=>{this.props.pickedService('Servicios del hogar')}}
          ><Emoji symbol="👉"/> Servicios del hogar</button>
        </div>

        <div className="form-group">
        <button className="btn btn-light mr-4"
            onClick={()=>{this.props.pickedService('Reforma');}}
          ><Emoji symbol="👉"/> Reforma</button>
      </div>
      
      </div>
    );
  }
}
export default ChooseService;


