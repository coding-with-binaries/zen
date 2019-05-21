package com.zen.zenserver.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Table(name = "clients")
@Entity
public class Client {
	public enum Gender {
		male, female
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int zenId;

	private String firstName;

	private String lastName;

	private String phoneNumber;

	private String email;

	private String dateOfBirth;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "client", cascade = CascadeType.ALL)
	private Set<Order> orders;

	public int getZenId() {
		return zenId;
	}

	public void setZenId(int zenId) {
		this.zenId = zenId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public Set<Order> getOrders() {
		return orders;
	}

	public void setOrders(Set<Order> orders) {
		this.orders = orders;
	}
}
