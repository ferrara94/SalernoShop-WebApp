package com.develop.shop.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserLogInController {
	
	@Autowired
	UserService service;

	@GetMapping(value = "/fetch/user/{userId}")
	public UserC fetchUserByUserId(@PathVariable("userId") String UserId) {
			
		UserC user = service.getUserByUserId(UserId);
				
		if(user == null) return null;
								
		return user;
	}
	
	
	@GetMapping(value = "/fetch/userByCredentials/{userId}/{password}")
	public UserC fetchUserByCredentials(
			@PathVariable("userId") String UserId,
			@PathVariable("password") String password
		) {
			
		UserC user = service.getUserByCredentials(UserId,password);
				
		
		if(user == null) return null;
								
		return user;
	}
	
	
	@GetMapping(value = "/fetch/users")
	public List<UserC> fetchUsers() {
				
		List<UserC> users = service.getAllUsers();
				
		if(users == null) return null;
				
		
		return users;
	}
	
}
