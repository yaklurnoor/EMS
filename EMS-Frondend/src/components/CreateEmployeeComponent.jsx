import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
   
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''

        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.emailId = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
        
    }
    
    changeFirstNameHandler=(event)=>{
        this.setState({firstName:event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({emailId:event.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName,lastName: this.state.lastName,emailId : this.state.emailId};
        console.log('emloyee '+JSON.stringify(employee));
        EmployeeService.createEmployees(employee).then(res=>{
            this.props.history.push('employees')
        });
 
     }

     cancelForm(){
        console.log("In cancel form");
        this.props.history.push('/employees');
     }

    render() {
        return (
            <div>
                 <div className="container"> 
                 <div className="row"> 
                 <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Employee</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                            <label className="text-center">First Name:  </label>
                                <input placeholder="First Name" name="firstName" className="form-control"
                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                             </div> 
                             <div className="form-group">
                                <label>Last Name: </label>
                                <input placeholder="Last Name" name="lastName" className="form-control"
                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Email ID: </label>
                                <input placeholder="Email id" name="emailId" className="form-control"
                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                            </div>
                            <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancelForm}>Cancel</button> 
                        </form>

                    </div>
                 </div>
            </div>   
            </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;