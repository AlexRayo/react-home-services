import React, { Component } from 'react';
import ClientInfo from './ClientInfo';
import ChooseService from './ChooseService';
import Confirm from './Confirm';
import Success from './Success';
import Fail from './Fail';
import Workday from './Workday';
import StartDate from './StartDate';
import HeaderDetails from './HeaderDetails';

export class Main extends Component {
  state = {
    step: 1,
    service : '',
    reform: [],
    workday: '',
    reform_detail: '',
    start_date: '',
    end_date: '',
    note_service: '',
    name: '',
    phone: '',
    email: '',
    email_client_send: true,
    note_client:'',
    baby_sister: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  failStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle text fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  //Change service state
  serviceName = (value) =>{
    this.setState({service : value})
  }
  //Change reform
  reformName = (value) =>{
    this.setState({reform : value})
  }
  //
  eraseReformDetail = ()=>{
    this.setState({reform_detail : ''})
  }
  //
  workDay = (value) =>{
    this.setState({workday : value})
  }
  //
  emailClientSend = (initialState) =>{
    this.setState({email_client_send : !initialState})
  }
  render() {
    const { step } = this.state;
    const { name, phone, email, note_client, service, workday,reform, email_client_send, reform_detail, start_date, end_date, note_date } = this.state;
    const values = { name, phone, email, note_client, service,workday,reform, email_client_send, reform_detail, start_date, end_date, note_date };

    switch (step) {
      //ELIGIENDO UN SERVICIO
      case 1:
        return (
          <div className="col-12 col-md-8 col-lg-6 py-4 mx-auto border">
          <HeaderDetails values={values}/>
            <ChooseService
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              serviceName={this.serviceName}
              reformName={this.reformName}
              values={values}
            />
          </div>
        );
      //SELECCIONANDO JORNADA LABORAL
      case 2:
        return (
          <div className="col-12 col-md-8 col-lg-6 py-4 mx-auto border">
            <HeaderDetails values={values}/>
            <Workday
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              reformName={this.reformName}
              workDay={this.workDay}
              values={values}
            />
          </div>
        );
      //FECHA DE INICIO
      case 3:
        return (
          <div className="col-12 col-md-8 col-lg-6 py-4 mx-auto border">
            <HeaderDetails values={values}/>
            <StartDate
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      //
      case 4:
        return (
          <div className="align-items-center h-100">
          <ClientInfo
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
        );
      case 5:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            failStep={this.failStep}
            emailClientSend={this.emailClientSend}
            values={values}
          />
        );
      case 6:
        return <Success />;

        case 7:
          return <Fail />;

      default:
        return (
          <Success />       
        );
    }
  }
}

export default Main;
