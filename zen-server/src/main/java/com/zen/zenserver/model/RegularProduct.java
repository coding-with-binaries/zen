package com.zen.zenserver.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class RegularProduct extends Product {
	public enum ProductType {
		dental, spa, hair
	}

	@Enumerated(EnumType.STRING)
	private ProductType productType;

	public ProductType getProductType() {
		return productType;
	}

	public void setProductType(ProductType productType) {
		this.productType = productType;
	}
}
