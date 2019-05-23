package com.zen.zenserver.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Order;
import com.zen.zenserver.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	public Order addOrder(Order order) {
		return orderRepository.save(order);
	}

	public Order getOrderById(int zenId) {
		return orderRepository.findById(zenId).orElseThrow(() -> new ZenException("Order not found with id : " + zenId));
	}

	public List<Order> getAllOrdersBetween(Date startDate, Date endDate) {
		return orderRepository.getAllOrdersBetweenDates(startDate, endDate);
	}
}
