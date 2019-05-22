package com.zen.zenserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zen.zenserver.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
