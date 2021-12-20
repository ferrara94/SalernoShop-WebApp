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

	@Override
	public void populateDB() {
		
		//Users
		
		UserC user = new UserC();
		user.setUserid("Felice");
		user.setPassword("01234");
		user.setRole("USER");
		user.setActive(true);
		
		UserC user2 = new UserC();
		user2.setUserid("Marco");
		user2.setPassword("56789");
		user2.setRole("USER");
		user2.setActive(true);
		
		UserC user3 = new UserC();
		user3.setUserid("John");
		user3.setPassword("00000");
		user3.setRole("USER");
		user3.setActive(false);
				
		UserC admin = new UserC();
		admin.setUserid("Admin");
		admin.setPassword("87960");
		admin.setRole("ADMIN");
		admin.setActive(true);
				
		repo.save(user);
		repo.save(user2);
		repo.save(user3);
		repo.save(admin);
		
	}
	
}
