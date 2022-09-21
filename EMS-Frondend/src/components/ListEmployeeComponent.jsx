import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';



class ListEmployeeComponent extends Component {


    constructor(props){
        super(props)
        this.state = {
           employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
                this.setState({
                    employees: res.data
                });
        })
    }
   
   addEmployee(){       
        this.props.history.push('/addemployee');
       
   }

   editEmployee(id){   
    console.log("In Edit employee"+id);
    //this.props.history.push('/updateEmployee/${id}');
    this.props.history.push(`/updateEmployee/${id}`);
   }

    deleteEmployee(id) {   
        console.log("...Once Buttonclick  Delete  employee" +id);        
        EmployeeService.deleteEmployees(id).then(res=>{           
          this.setState({employees: this.state.employees.filter(employee =>employee.id!==id)}) ;      
        });
}

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List Details</h2>
                <div className="row">
                    <button  className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>

                <div className ="row">
                    <table className="table table-striped table-bordered">
                    <thead>
                        
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                       </thead>
                        <tbody>
                            {
                                this.state.employees.map (
                                    employee =>
                                    <tr key ={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td><div className="row">
                    <button  className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
                    <button  className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                </div></td>
                                    </tr>
                                )
                            }
                            

                        </tbody>
                   

                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListEmployeeComponent;