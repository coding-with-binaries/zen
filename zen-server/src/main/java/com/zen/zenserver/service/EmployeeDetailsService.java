package com.zen.zenserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zen.zenserver.model.Employee;
import com.zen.zenserver.repository.EmployeeRepository;
import com.zen.zenserver.security.EmployeeDetails;

@Service
public class EmployeeDetailsService implements UserDetailsService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Employee employee = employeeRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with email : " + email));

		return EmployeeDetails.create(employee);
	}

	@Transactional
	public UserDetails loadUserById(int zenId) {
		Employee employee = employeeRepository.findById(zenId)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with id : " + zenId));

		return EmployeeDetails.create(employee);
	}
}
