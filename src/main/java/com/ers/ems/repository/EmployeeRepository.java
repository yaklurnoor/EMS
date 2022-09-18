package com.ers.ems.repository;

import org.springframework.data.repository.CrudRepository;

import com.ers.ems.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee,Long>{
	

	
}
