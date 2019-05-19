package com.zen.zenserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zen.zenserver.model.Client;

public interface ClientRepository extends JpaRepository<Client, Integer> {
	final String SEARCH_CLIENT_QUERY = "SELECT c FROM Client c WHERE LOWER(CONCAT(c.firstName, ' ', c.lastName)) LIKE %?1% OR LOWER(c.email) LIKE %?1% OR c.phoneNumber like %?1%";

	@Query(value = SEARCH_CLIENT_QUERY)
	public List<Client> searchClients(String pattern);
}
