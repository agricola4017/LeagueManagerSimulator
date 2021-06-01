package com.example.demo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository 
	extends JpaRepository<Player, Long>{

	//@Query("SELECT s FROM Player s WHERE s.name= ?1")
	Optional<Player> findPlayerByName(String name);
	
	//@Query("SELECT s FROM Player s WHERE s.id= ?1")
	Optional<Player> findPlayerById(Long id);
}
