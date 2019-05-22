package com.zen.zenserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zen.zenserver.model.CustomProduct;

public interface CustomProductRepository extends JpaRepository<CustomProduct, Integer> {

}
