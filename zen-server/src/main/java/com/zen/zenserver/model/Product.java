package com.zen.zenserver.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "products")
@Entity
public class Product {

	public enum ProductType {
		hair, dental, spa, undefined
	}

	public enum Source {
		standard, custom
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int zenId;

	private String description;

	private double price;

	@Enumerated(EnumType.STRING)
	private ProductType productType;

	@Enumerated(EnumType.STRING)
	private Source source;

	public Product() {

	}

	public Product(String description, double price, ProductType productType, Source source) {
		super();
		this.description = description;
		this.price = price;
		this.productType = productType;
		this.source = source;
	}

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

	public ProductType getProductType() {
		return productType;
	}

	public void setProductType(ProductType productType) {
		this.productType = productType;
	}

	public Source getSource() {
		return source;
	}

	public void setSource(Source source) {
		this.source = source;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("{");
		sb.append("zenId:").append(zenId);
		sb.append(", description:'").append(description).append('\'');
		sb.append(", price:").append(price);
		sb.append(", productType:'").append(productType).append('\'');
		sb.append(", source:'").append(source).append('\'');
		sb.append('}');
		return sb.toString();
	}
}
