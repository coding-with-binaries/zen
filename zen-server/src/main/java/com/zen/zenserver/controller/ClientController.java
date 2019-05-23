package com.zen.zenserver.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.zen.zenserver.exception.ZenException;
import com.zen.zenserver.model.Client;
import com.zen.zenserver.payload.ApiResponse;
import com.zen.zenserver.service.ClientService;

@RestController
@RequestMapping(value = "/api/clients")
public class ClientController {
	@Autowired
	public ClientService clientService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<?> getAllClients() {
		return ResponseEntity.ok(clientService.getAllClients());
	}

	@RequestMapping(value = "/{zenId}", method = RequestMethod.GET)
	public ResponseEntity<?> getClient(@PathVariable int zenId) {
		try {
			return ResponseEntity.ok(clientService.getClient(zenId));
		} catch (ZenException exception) {
			return new ResponseEntity<>(new ApiResponse(false, exception.getMessage()), HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> addClient(@RequestBody Client client) {
		Client result = clientService.addClient(client);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/clients/{zenId}")
				.buildAndExpand(result.getZenId()).toUri();

		return ResponseEntity.created(location).body(result);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Client updateClient(@RequestBody Client client) {
		clientService.updateClient(client);
		return client;
	}

	@RequestMapping(value = "/search/{pattern}", method = RequestMethod.GET)
	public ResponseEntity<?> searchClients(@PathVariable String pattern) {
		return ResponseEntity.ok(clientService.searchClients(pattern));
	}
}
