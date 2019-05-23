package com.zen.zenserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Client;
import com.zen.zenserver.repository.ClientRepository;

@Service
public class ClientService {
	@Autowired
	private ClientRepository clientRepository;

	public List<Client> getAllClients() {
		return clientRepository.findAll();
	}

	public Client getClient(int zenId) {
		return clientRepository.findById(zenId).orElseThrow(() -> new ZenException("Client not found with id : " + zenId));
	}

	public Client addClient(Client client) {
		clientRepository.save(client);
		return client;
	}

	public void updateClient(Client client) {
		clientRepository.save(client);
	}

	public List<Client> searchClients(String pattern) {
		return clientRepository.searchClients(pattern);
	}
}
