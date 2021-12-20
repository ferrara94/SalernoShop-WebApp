package com.develop.shop.users;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "USERS")
@Data
public class UserC implements Serializable {

	private static final long serialVersionUID = 790659285956242173L;

	@Id	
	private String userid;
	
	private String password;
	
	private boolean active;
	
	private String role;

	public UserC(String userid, String password, boolean active, String role) {
		this.userid = userid;
		this.password = password;
		this.active = active;
		this.role = role;
	}
	
	public UserC() {}
	
}
