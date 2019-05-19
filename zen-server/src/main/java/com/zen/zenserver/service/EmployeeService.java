package com.zen.zenserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.model.Employee;
import com.zen.zenserver.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public Employee checkLoginCredentials(String email, String password) {
		return employeeRepository.isValidEmployee(email, password);
	}

	public void addEmployee(Employee employee) {
		employeeRepository.save(employee);
	}
}
