package com.zen.zenserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Product;
import com.zen.zenserver.model.Product.Source;
import com.zen.zenserver.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<Product> getAllProducts() {
		return productRepository.findAllBySource(Source.standard);
	}

	public Product getProductById(int zenId) {
		return productRepository.findById(zenId)
				.orElseThrow(() -> new ZenException("Product not found with id : " + zenId));
	}

	public List<Product> searchProduct(String pattern) {
		return productRepository.searchProductBySource(pattern, Source.standard);
	}

	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
}
