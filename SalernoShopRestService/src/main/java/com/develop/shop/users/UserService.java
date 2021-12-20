package com.develop.shop.users;

import java.util.List;

public interface UserService {

	public List<UserC> getAllUsers();

	public UserC getUserByUserId(String UserId);
	
	public UserC getUserByCredentials(String UserId, String password);
	
	public void addUser(UserC user);
	
	public void addUsers(List<UserC> users);
	
	public boolean userCredentialsJustEntered(String userid, String role);
	
	
}
