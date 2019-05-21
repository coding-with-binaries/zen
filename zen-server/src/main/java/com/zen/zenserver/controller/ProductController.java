package com.zen.zenserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.zen.zenserver.model.RegularProduct;
import com.zen.zenserver.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@RequestMapping(method = RequestMethod.GET)
	public List<RegularProduct> getAllItems() {
		return productService.getAllProducts();
	}

	@RequestMapping(value = "/search/{pattern}", method = RequestMethod.GET)
	public List<RegularProduct> getFilteredProducts(@PathVariable String pattern) {
		return productService.searchProduct(pattern);

	}
}
