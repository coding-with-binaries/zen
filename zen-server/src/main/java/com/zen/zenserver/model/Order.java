package com.zen.zenserver.model;

import java.util.Date;
import java.util.List;

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

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Table(name = "orders")
@Entity
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int zenId;

	private Date orderDate;

	private Date appointmentDate;

	private double total;

	@ManyToOne
	@JoinColumn(name = "client_id")
	private Client client;

	@JsonManagedReference(value = "order_ref")
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "order", cascade = CascadeType.ALL)
	private List<OrderItem> orderItems;

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

	public List<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

	@Override
	public String toString() {
		final StringBuilder sb = new StringBuilder("{");
		sb.append("zenId:").append(zenId);
		sb.append(", orderDate:").append(orderDate);
		sb.append(", appointmentDate:").append(appointmentDate);
		sb.append(", total:").append(total);
		sb.append(", client:").append(client);
		sb.append('}');
		return sb.toString();
	}
}
