package com.develop.shop.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Foodstuff implements Serializable {

	private static final long serialVersionUID = -3623576800063095221L;

	@Id
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "DESCRIPTION")
	private String description;
	
	public Foodstuff() {
	}
	
	public Foodstuff(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}
}
