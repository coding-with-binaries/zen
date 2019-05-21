package com.zen.zenserver.model;

import javax.persistence.Entity;

@Entity
public class CustomProduct extends Product {

	private String productType;

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}
}
