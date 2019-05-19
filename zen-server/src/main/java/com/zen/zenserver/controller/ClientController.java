package com.zen.zenserver.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zen.zenserver.model.Client;
import com.zen.zenserver.service.ClientService;

@RestController
@CrossOrigin
@RequestMapping(value = "clients")
public class ClientController {
	@Autowired
	public ClientService clientService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Client> getAllClients() {
		return clientService.getAllClients();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public @ResponseBody Optional<Client> getClient(@PathVariable int id) {
		return clientService.getClient(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Client addClient(@RequestBody Client client) {
		clientService.addClient(client);
		return client;
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Client updateClient(@RequestBody Client client) {
		clientService.updateClient(client);
		return client;
	}

	@RequestMapping(value = "/{search}", method = RequestMethod.GET)
	public @ResponseBody List<Client> searchClients(@PathVariable String pattern) {
		return clientService.searchClients(pattern);
	}
}
