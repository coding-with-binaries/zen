package com.zen.zenserver.security;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.zen.zenserver.model.Employee;

public class EmployeeDetails implements UserDetails {

	private static final long serialVersionUID = 2522362310116476034L;

	private int zenId;

	private String firstName;

	private String lastName;

	private String email;

	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;

	public EmployeeDetails(int zenId, String firstName, String lastName, String email, String password,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.zenId = zenId;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}

	public static EmployeeDetails create(Employee employee) {
		List<GrantedAuthority> authorities = employee.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());

		return new EmployeeDetails(employee.getZenId(), employee.getFirstName(), employee.getLastName(),
				employee.getEmail(), employee.getPassword(), authorities);
	}

	public int getZenId() {
		return zenId;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
