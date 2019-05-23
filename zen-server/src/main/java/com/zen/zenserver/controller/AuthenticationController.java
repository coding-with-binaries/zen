package com.zen.zenserver.controller;

import java.net.URI;
import java.util.Collections;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Employee;
import com.zen.zenserver.model.Role;
import com.zen.zenserver.model.Role.RoleName;
import com.zen.zenserver.payload.ApiResponse;
import com.zen.zenserver.payload.JwtAuthenticationResponse;
import com.zen.zenserver.payload.SignInRequest;
import com.zen.zenserver.payload.SignUpRequest;
import com.zen.zenserver.repository.RoleRepository;
import com.zen.zenserver.security.JwtTokenProvider;
import com.zen.zenserver.service.EmployeeService;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	EmployeeService employeeService;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	JwtTokenProvider tokenProvider;

	@RequestMapping(value = "/signin", method = RequestMethod.POST)
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody SignInRequest request) {

		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = tokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
	}

	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest request) {
		if (!employeeService.isEmailAvailable(request.getEmail())) {
			return ResponseEntity.badRequest().body(new ApiResponse(false, "Email already registered!"));
		}

		Employee employee = new Employee(request.getFirstName(), request.getLastName(), request.getEmail(),
				request.getPassword());

		employee.setPassword(passwordEncoder.encode(employee.getPassword()));

		Role employeeRole = roleRepository.findByName(RoleName.admin)
				.orElseThrow(() -> new ZenException("User Role not set."));

		employee.setRoles(Collections.singleton(employeeRole));

		Employee result = employeeService.addEmployee(employee);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/employees/{email}")
				.buildAndExpand(result.getEmail()).toUri();

		return ResponseEntity.created(location).body(new ApiResponse(true, "Employee registered successfully"));
	}
}
