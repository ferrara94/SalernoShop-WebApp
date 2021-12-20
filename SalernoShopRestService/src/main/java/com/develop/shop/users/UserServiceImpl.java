package com.develop.shop.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository repo;

	@Override
	public List<UserC> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public UserC getUserByUserId(String UserId) {
		Optional<UserC> user = repo.findById(UserId);

        if(user.isPresent()) return user.get();
        else return null;
	}
	
	@Override
	public UserC getUserByCredentials(String UserId, String password) {
		UserC user = repo.findByUseridAndPassword(UserId, password);
		return user;
	}

	@Override
	public void addUser(UserC user) {
		repo.save(user);
	}

	@Override
	public void addUsers(List<UserC> users) {
		repo.saveAll(users);
	}

	@Override
	public boolean userCredentialsJustEntered(String userid, String role) {
		
		UserC u = this.getUserByUserId(userid); 
		
		if(u == null) return false;
		
				
		if( u.getUserid().equals(userid) && u.getRole().equals(role) )
			return true;
		
		return false;
	}
	
}
