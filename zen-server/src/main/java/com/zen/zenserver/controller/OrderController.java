package com.zen.zenserver.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Order;
import com.zen.zenserver.payload.ApiResponse;
import com.zen.zenserver.payload.OrdersBetweenRequest;
import com.zen.zenserver.service.OrderService;

@RestController
@RequestMapping(value = "/api/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<?> getAllOrders() {
		return ResponseEntity.ok(orderService.getAllOrders());
	}

	@RequestMapping(value = "/{zenId}", method = RequestMethod.GET)
	public ResponseEntity<?> getOrder(@PathVariable int zenId) {
		try {
			return ResponseEntity.ok(orderService.getOrderById(zenId));
		} catch (ZenException exception) {
			return new ResponseEntity<>(new ApiResponse(false, exception.getMessage()), HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/between", method = RequestMethod.GET)
	public ResponseEntity<?> getAllOrdersBetween(@RequestBody OrdersBetweenRequest request) {
		return ResponseEntity.ok(orderService.getAllOrdersBetween(request.getStartDate(), request.getEndDate()));
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> addOrder(@RequestBody Order order) {
		Order result = orderService.addOrder(order);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/orders/{zenId}")
				.buildAndExpand(result.getZenId()).toUri();

		return ResponseEntity.created(location).body(result);
	}
}
