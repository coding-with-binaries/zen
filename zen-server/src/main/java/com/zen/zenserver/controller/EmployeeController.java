package com.zen.zenserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.payload.ApiResponse;
import com.zen.zenserver.payload.EmployeeInfo;
import com.zen.zenserver.security.CurrentEmployee;
import com.zen.zenserver.security.EmployeeDetails;
import com.zen.zenserver.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;

	@RequestMapping(value = "/current", method = RequestMethod.GET)
	public EmployeeInfo getCurrentEmployee(@CurrentEmployee EmployeeDetails currentEmployee) {
		EmployeeInfo employee = new EmployeeInfo(currentEmployee.getZenId(), currentEmployee.getFirstName(),
				currentEmployee.getLastName(), currentEmployee.getEmail());
		return employee;
	}

	@RequestMapping(value = "/{email}", method = RequestMethod.GET)
	public ResponseEntity<?> getEmployee(@PathVariable String email) {
		try {
			return ResponseEntity.ok(employeeService.getEmployeeByEmail(email));
		} catch (ZenException exception) {
			return new ResponseEntity<>(new ApiResponse(false, exception.getMessage()), HttpStatus.NOT_FOUND);
		}
	}
}
