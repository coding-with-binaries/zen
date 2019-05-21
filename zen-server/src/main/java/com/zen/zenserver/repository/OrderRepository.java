package com.zen.zenserver.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zen.zenserver.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
	final String GET_ORDERS_BETWEEN_QUERY = "SELECT o FROM Order o WHERE o.appointmentDate BETWEEN ?1 AND ?2";

	@Query(value = GET_ORDERS_BETWEEN_QUERY)
	public List<Order> getAllOrdersBetweenDates(Date startDate, Date endDate);
}
