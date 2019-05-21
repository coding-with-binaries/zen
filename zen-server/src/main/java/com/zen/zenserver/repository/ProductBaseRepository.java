package com.zen.zenserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.zen.zenserver.model.Product;

@NoRepositoryBean
public interface ProductBaseRepository<T extends Product> extends JpaRepository<T, Integer> {

}
