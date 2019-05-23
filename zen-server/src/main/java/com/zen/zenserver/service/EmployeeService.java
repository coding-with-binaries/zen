package com.zen.zenserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Employee;
import com.zen.zenserver.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	public boolean isEmailAvailable(String email) {
		return !employeeRepository.existsByEmail(email);
	}

	public Employee getEmployeeByEmail(String email) {
		return employeeRepository.findByEmail(email)
				.orElseThrow(() -> new ZenException("Employee not found with email : " + email));
	}

	public Employee addEmployee(Employee employee) {
		employeeRepository.save(employee);
		return employee;
	}
}
