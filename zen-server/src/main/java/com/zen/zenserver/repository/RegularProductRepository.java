package com.zen.zenserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.zen.zenserver.model.RegularProduct;

public interface RegularProductRepository extends ProductBaseRepository<RegularProduct> {
	final String SEARCH_PRODUCT_QUERY = "SELECT p FROM RegularProduct p WHERE p.description like %?1%";

	@Query(value = SEARCH_PRODUCT_QUERY)
	public List<RegularProduct> searchProduct(String pattern);
}
