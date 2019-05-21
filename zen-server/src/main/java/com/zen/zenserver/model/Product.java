package com.zen.zenserver.model;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.Table;

@Table(name = "products")
@Entity
@Inheritance
@DiscriminatorColumn(name = "is_a")
public abstract class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int zenId;

	private String description;

	private double price;

	public int getZenId() {
		return zenId;
	}

	public void setZenId(int zenId) {
		this.zenId = zenId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
}
