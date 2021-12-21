package com.develop.shop.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@RequestMapping(value = "api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {
	
	@Autowired
	UserService service;
	
	@GetMapping(value = "/a/get/all")
	public ResponseEntity<?>  getAllUser(){
				
		List<UserC> users = service.getAllUsers();
				
		return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@GetMapping(value = "/get/user/{userId}")
	public ResponseEntity<?> getUserByUserId(@PathVariable("userId") String UserId) {
				
		UserC user = service.getUserByUserId(UserId);
		
		HttpHeaders headers = new HttpHeaders();
		ObjectMapper mapper = new ObjectMapper();

		headers.setContentType(MediaType.APPLICATION_JSON);
		
		ObjectNode responseNode = mapper.createObjectNode();
		
		if(user == null) {
			
			responseNode.put("code", HttpStatus.OK.toString());
			responseNode.put("message", "user " + UserId + " not found"); 
									
			return new ResponseEntity<>(responseNode, headers, HttpStatus.NO_CONTENT);
		
		}
		
		responseNode.put("code", HttpStatus.OK.toString());
		responseNode.put("message", "user " + UserId + " found"); 
						
		return new ResponseEntity<>(responseNode, headers, HttpStatus.OK);
	}
	
	@GetMapping(value = "/_/get/user/{userId}/{password}")
	public ResponseEntity<?> getUserByUserIdAndPassword(@PathVariable("userId") String UserId
			,@PathVariable("password") String password) {
				
		UserC user = service.getUserByCredentials(UserId,password);
		
		HttpHeaders headers = new HttpHeaders();
		ObjectMapper mapper = new ObjectMapper();

		headers.setContentType(MediaType.APPLICATION_JSON);
		
		ObjectNode responseNode = mapper.createObjectNode();
		
		if(user == null) {
			
			responseNode.put("code", HttpStatus.OK.toString());
			responseNode.put("message", "user " + UserId + " not found"); 
									
			return new ResponseEntity<>(responseNode, headers, HttpStatus.NO_CONTENT);
		
		}
		
		responseNode.put("code", HttpStatus.OK.toString());
		responseNode.put("role", user.getRole());
		responseNode.put("isActive", user.isActive());
		responseNode.put("message", "user " + UserId + " found"); 
						
		return new ResponseEntity<>(responseNode, headers, HttpStatus.OK);
	}

}
