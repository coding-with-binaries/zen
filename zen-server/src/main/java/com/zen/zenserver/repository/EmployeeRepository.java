package com.zen.zenserver.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zen.zenserver.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	public Optional<Employee> findByEmail(String email);

	public boolean existsByEmail(String email);
}
