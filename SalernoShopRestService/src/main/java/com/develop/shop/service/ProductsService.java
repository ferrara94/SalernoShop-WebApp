package com.develop.shop.service;

import java.util.List;

import com.develop.shop.entity.Product;

public interface ProductsService {

	public List<Product> getProductsByFoodstuff(String foodstuff);
	
	public List<Product> getAllProducts();
	
	public void addProduct(Product product);
	
	//public List<Product> getPathImages(List<Product> items);
	
	public void populateDB();
	
}
