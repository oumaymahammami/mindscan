package com.jts.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jts.login.dto.LoginRequest;
import com.jts.login.dto.LoginResponse;
import com.jts.login.service.LoginService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("/doLogin")
	public ResponseEntity<LoginResponse> doLogin(@RequestBody LoginRequest request) {
		LoginResponse response = new LoginResponse();
		response.setToken("token_details");
		
		String result = loginService.doLogin(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
}
