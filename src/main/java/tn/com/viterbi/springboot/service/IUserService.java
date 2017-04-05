package tn.com.viterbi.springboot.service;

import java.util.List;
import java.util.Optional;

import tn.com.viterbi.springboot.model.User;

public interface IUserService {

	Optional<User> findById(Long id);

	User findByName(String name);

	void saveUser(User user);

	void updateUser(User user);

	void deleteUserById(Long id);

	void deleteAllUsers();

	List<User> findAllUsers();

	boolean isUserExist(User user);
}