package com.develop.shop.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

import lombok.Data;


@Entity
@Data
public class Product implements Serializable{

	private static final long serialVersionUID = 7759323322045419421L;

	@Id
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "FOODSTUFF")
	private String foodstuff;
	
	
	@Column(name = "PRICE")
	private double price;
	
	@Column(name = "DESCRIPTION")
	private String description;
	
	@Transient
	private String pathImage;
	
	public Product() {}
	
	public Product(String name, String foodstuff, double price, String description) {
		
		this.name = name;
		this.foodstuff = foodstuff;
		this.price = price;
		this.description = description;
	}
}
