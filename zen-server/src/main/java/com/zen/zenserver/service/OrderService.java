package com.zen.zenserver.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Order;
import com.zen.zenserver.model.OrderItem;
import com.zen.zenserver.model.Product;
import com.zen.zenserver.model.Product.Source;
import com.zen.zenserver.repository.OrderRepository;
import com.zen.zenserver.repository.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private ProductRepository productRepository;

	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	public Order addOrder(Order order) {
		for (OrderItem item : order.getOrderItems()) {
			Product orderProduct = item.getProduct();
			if (orderProduct.getZenId() <= 0) {
				Product product = new Product(orderProduct.getDescription(), orderProduct.getPrice(),
						orderProduct.getProductType(), Source.custom);
				Product p = productRepository.save(product);
				item.setProduct(p);
			}
		}
		return orderRepository.save(order);
	}

	public Order getOrderById(int zenId) {
		return orderRepository.findById(zenId)
				.orElseThrow(() -> new ZenException("Order not found with id : " + zenId));
	}

	public List<Order> getAllOrdersBetween(Date startDate, Date endDate) {
		return orderRepository.getAllOrdersBetweenDates(startDate, endDate);
	}
}
