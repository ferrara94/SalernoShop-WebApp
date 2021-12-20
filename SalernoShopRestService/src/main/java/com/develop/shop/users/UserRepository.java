package com.develop.shop.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<UserC, String>{
	public UserC findByUserid(String userId);
	public UserC findByUseridAndPassword(String userId, String password);
		
}
