package com.zen.zenserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zen.zenserver.model.Client;

public interface ClientRepository extends JpaRepository<Client, Integer> {
}
