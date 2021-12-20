package com.develop.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.develop.shop.service.ProductsService;
import com.develop.shop.users.UserService;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ConfigurableApplicationContext context =  
				SpringApplication.run(Application.class, args);
		
		ProductsService products = context.getBean(ProductsService.class);
		products.populateDB();
		
		UserService users = context.getBean(UserService.class);
		users.populateDB();				
		
	}

}
