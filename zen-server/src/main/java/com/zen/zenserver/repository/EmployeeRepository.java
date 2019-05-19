package com.zen.zenserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zen.zenserver.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	final String VALID_EMPLOYEE_QUERY = "SELECT e FROM Employee e WHERE e.email = ?1 AND e.password = ?2";

	@Query(value = VALID_EMPLOYEE_QUERY)
	public Employee isValidEmployee(String email, String password);
}
