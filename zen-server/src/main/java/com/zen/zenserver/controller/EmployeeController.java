package com.zen.zenserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.zen.zenserver.model.Employee;
import com.zen.zenserver.service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public Employee checkLoginCredentials(@RequestBody Employee employee) {
		return employeeService.checkLoginCredentials(employee.getEmail(), employee.getPassword());
	}

	@RequestMapping(method = RequestMethod.POST)
	public Employee addEmployee(@RequestBody Employee employee) {
		employeeService.addEmployee(employee);
		return employee;
	}
}