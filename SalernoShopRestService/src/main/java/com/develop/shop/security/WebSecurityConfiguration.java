package com.develop.shop.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import com.develop.shop.users.UserC;
import com.develop.shop.users.UserServiceImpl;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter{

	@Autowired
	UserServiceImpl service;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	};
	
	private static final String[] PRODUCTS_MATCHER = { "/api/products/**"};
	private static final String[] ALL_MATCHER = { "/api/users/_/**"};
	private static final String[] USER_MATCHER = { "/api/users/u/**"};
	private static final String[] ADMIN_MATCHER = { "/api/users/a/**"};
	
	@Override
	protected void configure(HttpSecurity http) 
			throws Exception
	{
		http.csrf().disable()
		.authorizeRequests()
		.antMatchers(ALL_MATCHER).permitAll()
		.antMatchers(USER_MATCHER).hasAnyRole("USER")
		.antMatchers(PRODUCTS_MATCHER).hasAnyRole("USER")
		.antMatchers(ADMIN_MATCHER).hasAnyRole("ADMIN")
		.anyRequest().authenticated()
		.and()
		.httpBasic()//.realmName(REALM).authenticationEntryPoint(getBasicAuthEntryPoint())
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
	}
	
	@Bean
	@Override
	protected UserDetailsService userDetailsService() {
		
		UserBuilder users = User.builder();
		
		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
		
		List<UserC> usersList = service.createUsersList();
		System.err.println(usersList);
		
		if(usersList.size()>0) {
			
			for(UserC u: usersList) {
				System.err.println(u);
				manager.createUser(
						 users
						 	.username(u.getUserid())
						 	.password(new BCryptPasswordEncoder().encode(u.getPassword()))
						 	.roles(u.getRole())
						 	.build()
						 	);
				
			}
		}			
				
		return manager;
	}

	@Override
	public void configure(WebSecurity web) throws Exception
	{
		web.ignoring().antMatchers(HttpMethod.OPTIONS, "/**");
	}
	
}
