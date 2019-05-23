package com.zen.zenserver.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class ZenException extends RuntimeException {

	private static final long serialVersionUID = 7999480165379215809L;

	public ZenException(String message) {
		super(message);
	}

	public ZenException(String message, Throwable cause) {
		super(message, cause);
	}
}