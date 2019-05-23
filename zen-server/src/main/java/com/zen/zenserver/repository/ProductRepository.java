package com.zen.zenserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zen.zenserver.model.Product;
import com.zen.zenserver.model.Product.Source;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	final String SEARCH_STANDARD_PRODUCT_QUERY = "SELECT p FROM Product p WHERE (LOWER(p.description) LIKE %?1% OR LOWER(p.productType) LIKE %?1%) AND p.source = ?2";

	public List<Product> findAllBySource(Source source);

	@Query(value = SEARCH_STANDARD_PRODUCT_QUERY)
	public List<Product> searchProductBySource(String pattern, Source source);
}
