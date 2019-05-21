package com.zen.zenserver.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Table(name = "orders")
@Entity
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int zenId;

	private Date orderDate;

	private Date appointmentDate;

	private float discount;

	private double total;

	@ManyToOne
	@JoinColumn(name = "client_id")
	private Client client;

	@JsonBackReference
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "order", cascade = CascadeType.ALL)
	private Set<OrderItem> orderProducts;

	public int getZenId() {
		return zenId;
	}

	public void setZenId(int zenId) {
		this.zenId = zenId;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public float getDiscount() {
		return discount;
	}

	public void setDiscount(float discount) {
		this.discount = discount;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Set<OrderItem> getOrderProducts() {
		return orderProducts;
	}

	public void setOrderProducts(Set<OrderItem> orderProducts) {
		this.orderProducts = orderProducts;
	}
}
