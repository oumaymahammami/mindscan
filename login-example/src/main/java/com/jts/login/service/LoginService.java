package com.jts.login.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jts.login.dto.LoginRequest;
import com.jts.login.dto.User;
import com.jts.login.repo.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;

	public String doLogin(LoginRequest request) {
		Optional<User> users = loginRepository.findByUsername(request.getUsername());

		if (users.isPresent()) {
			return "User details found";
		}

		return "User details not found";
	}

}
