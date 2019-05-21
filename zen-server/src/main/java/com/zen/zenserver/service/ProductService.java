package com.zen.zenserver.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.model.RegularProduct;
import com.zen.zenserver.repository.RegularProductRepository;

@Service
public class ProductService {

	@Autowired
	private RegularProductRepository regularProductRepository;

	public List<RegularProduct> getAllProducts() {
		return regularProductRepository.findAll();
	}

	public Optional<RegularProduct> getProductById(int zenId) {
		return regularProductRepository.findById(zenId);
	}

	public List<RegularProduct> searchProduct(String pattern) {
		return regularProductRepository.searchProduct(pattern);
	}

	public RegularProduct addProduct(RegularProduct regularProduct) {
		return regularProductRepository.save(regularProduct);
	}
}
