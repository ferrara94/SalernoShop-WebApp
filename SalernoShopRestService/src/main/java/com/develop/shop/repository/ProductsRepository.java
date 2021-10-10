package com.develop.shop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.develop.shop.entity.Product;

@Repository
public interface ProductsRepository extends JpaRepository<Product, String> {

	public List<Product> findByFoodstuff(String foodstuff);
	
}
