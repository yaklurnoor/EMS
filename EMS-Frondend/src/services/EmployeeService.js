import axios from 'axios';



const EMPLOYEE_API_URL = "http://localhost:5050/ems/api/employees";
class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_URL);

    }

   createEmployees(employee){
        return axios.post(EMPLOYEE_API_URL,employee);

    }


    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_URL + "/" +employeeId);

    }

    
    updateEmployees(employee,id){
        console.log("In update employee "+id);
        return axios.post(EMPLOYEE_API_URL + `/update/${id}`,employee,employee.employeeId);

    }

    deleteEmployees(id){
        console.log("In delete employee "+id);
        return axios.delete(EMPLOYEE_API_URL + `/delete/${id}`,id);

    }

}

export default new EmployeeService()