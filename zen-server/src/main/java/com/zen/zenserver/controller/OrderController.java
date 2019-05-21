package com.zen.zenserver.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zen.zenserver.model.Order;
import com.zen.zenserver.service.OrderService;
import com.zen.zenserver.types.Dates;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Order> getAllOrders() {
		return orderService.getAllOrders();
	}

	@RequestMapping(value = "/{zenId}", method = RequestMethod.GET)
	public @ResponseBody Optional<Order> getOrder(@PathVariable int zenId) {
		return orderService.getOrderById(zenId);
	}

	@RequestMapping(value = "/between", method = RequestMethod.GET)
	public @ResponseBody List<Order> getAllOrdersBetween(@RequestBody Dates dates) {
		return orderService.getAllOrdersBetween(dates.getStartDate(), dates.getEndDate());
	}

	@RequestMapping(method = RequestMethod.POST)
	public Order addOrder(@RequestBody Order order) {
		orderService.addOrder(order);
		return order;
	}
}
