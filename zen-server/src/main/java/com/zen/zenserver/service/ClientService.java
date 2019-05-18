package com.zen.zenserver.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.model.Client;
import com.zen.zenserver.repository.ClientRepository;

@Service
public class ClientService {
	@Autowired
	private ClientRepository clientRepository;

	public List<Client> getAllClients() {
		return clientRepository.findAll();
	}

	public Optional<Client> getClient(int clientId) {
		return clientRepository.findById(clientId);
	}

	public void addClient(Client client) {
		clientRepository.save(client);
	}

	public void updateClient(Client client) {
		clientRepository.save(client);
	}

}
