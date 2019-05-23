package com.zen.zenserver.payload;

public class EmployeeInfo {

	private int zenId;

	private String firstName;

	private String lastName;

	private String email;

	public EmployeeInfo(int zenId, String firstName, String lastName, String email) {
		super();
		this.zenId = zenId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
