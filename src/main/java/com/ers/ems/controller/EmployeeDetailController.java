package com.ers.ems.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ers.ems.model.Employee;
import com.ers.ems.repository.EmployeeRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ems/api")
public class EmployeeDetailController {
	
	@Autowired
	EmployeeRepository employeeRepository ;
	
	
	@GetMapping("/employees")
	public List<Employee> getTeamDetails() {		
		return (List<Employee>) employeeRepository.findAll();	
		
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee  ) {		
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeDetailsById(@PathVariable Long empId ) {
		
		Employee employee = employeeRepository.findById(empId)
				.orElseThrow(() -> null);
		return ResponseEntity.ok(employee);
		
	}
	
}
