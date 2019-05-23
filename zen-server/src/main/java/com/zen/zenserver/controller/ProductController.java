package com.zen.zenserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Product;
import com.zen.zenserver.payload.ApiResponse;
import com.zen.zenserver.service.ProductService;

@RestController
@RequestMapping(value = "/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<?> getAllItems() {
		return ResponseEntity.ok(productService.getAllProducts());
	}

	@RequestMapping(value = "/{zenId}", method = RequestMethod.GET)
	public ResponseEntity<?> getOrder(@PathVariable int zenId) {
		try {
			return ResponseEntity.ok(productService.getProductById(zenId));
		} catch (ZenException exception) {
			return new ResponseEntity<>(new ApiResponse(false, exception.getMessage()), HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/search/{pattern}", method = RequestMethod.GET)
	public ResponseEntity<?> getFilteredProducts(@PathVariable String pattern) {
		return ResponseEntity.ok(productService.searchProduct(pattern));

	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> addProduct(@RequestBody Product product) {
		Product result = productService.addProduct(product);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/products/{zenId}")
				.buildAndExpand(result.getZenId()).toUri();

		return ResponseEntity.created(location).body(result);
	}
}
