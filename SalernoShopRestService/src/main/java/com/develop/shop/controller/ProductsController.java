package com.develop.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.develop.shop.entity.Product;
import com.develop.shop.service.ProductsServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductsController {

	@Autowired
	ProductsServiceImpl service;
	
	@GetMapping(value ="/u/rest/items/all/json")
	public ResponseEntity<List<Product>> getProducts(){
		
		List<Product> items = service.getAllProducts();
		
		if(items.isEmpty())	return null;
		
		
		return new ResponseEntity<List<Product>>(items, HttpStatus.OK);
		
	}
	
	@GetMapping(value ="/u/rest/items/pasta/json")
	public ResponseEntity<List<Product>> getPastaProducts(){
		
		List<Product> products = service.getProductsByFoodstuff("pasta");
		
		if(products.isEmpty())	return null;
		
		
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
		
	}
	
	@GetMapping(value ="/u/rest/items/water/json")
	public ResponseEntity<List<Product>> getWaterProducts(){
		
		List<Product> products = service.getProductsByFoodstuff("water");
		
		if(products.isEmpty())	return null;
		
		
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
		
	}
	
	@GetMapping(value ="/u/rest/items/fish/json")
	public ResponseEntity<List<Product>> getFishProducts(){
		
		List<Product> products = service.getProductsByFoodstuff("fish");
		
		if(products.isEmpty())	return null;
		
		
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
		
	}
	
	@GetMapping(value ="/u/rest/items/chocolate/json")
	public ResponseEntity<List<Product>> getChocolateProducts(){
		
		List<Product> products = service.getProductsByFoodstuff("chocolate");
		
		if(products.isEmpty())	return null;
		
		
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
		
	}
	
	@PostMapping(value ="/a/rest/items/add/product")
	public ResponseEntity<?> addProduct(@RequestBody Product product){
		
		System.err.println("add product");
		if(product == null) {
			System.err.println("error product");
			return null;
		}
		
		HttpHeaders headers = new HttpHeaders();
		ObjectMapper mapper = new ObjectMapper();
		
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		ObjectNode responseNode = mapper.createObjectNode();
					
		responseNode.put("code", HttpStatus.OK.toString());
		responseNode.put("message", "msg equal to the test message");
	
		
		service.addProduct(product);
		
		return new ResponseEntity<>(responseNode, headers, HttpStatus.CREATED);
		
		
		
		
	}
	
}
