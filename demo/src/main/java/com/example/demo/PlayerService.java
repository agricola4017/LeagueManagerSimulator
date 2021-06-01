package com.example.demo;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PlayerService {
	
	private final PlayerRepository playerRepository;
	
	@Autowired
	public PlayerService(PlayerRepository playerRepository) {
		super();
		this.playerRepository = playerRepository;
	}
	public List<Player> getPlayers() { 
		return playerRepository.findAll();
	}
	public Optional<Player> getPlayer(Long playerId) {
		return playerRepository.findPlayerById(playerId);
	}
	public void addNewPlayer(Player player) {
		Optional<Player> playerOptional = playerRepository.findPlayerByName(player.getName());
		if (playerOptional.isPresent()) {
			throw new IllegalStateException("name taken");
		}
		playerRepository.save(player);
	}
	public void deletePlayer(Long playerId) {
		boolean exists= playerRepository.existsById(playerId);
		if (!exists) {
			throw new IllegalStateException("player with id " + playerId + " does not exist");
		}
		playerRepository.deleteById(playerId);
	}
	@Transactional
	public void updatePlayer(Long playerId, String name, int age, String country) {
		Player player = playerRepository.findById(playerId).orElseThrow(()-> new IllegalStateException(
				"player with id " + playerId + " does not exist"));
		if (name!=null && name.length()>0 && !Objects.equals(player.getName(), name)) {
			player.setName(name);
		}
		if (age > 0 && age < 120) {
			player.setAge(age);
		}
		if (country == "USA" || country == "EU" || country == "CN" || country == "KR") {
			player.setCountry(country);
		}  else {
			throw new IllegalStateException("invalid country");
		}
	}

	
}
