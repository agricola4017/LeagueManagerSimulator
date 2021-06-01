package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController //auto converts to JSON
@RequestMapping(path = "api/v1/player")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {
	
	private final PlayerService playerService;
	
	@Autowired
	public PlayerController(PlayerService playerService) {
		this.playerService = playerService;
	}
	
	
	@GetMapping 
	public List<Player> getPlayers() { 
		return playerService.getPlayers();
	}
	
	@GetMapping(path = "{playerId}")
	public Optional<Player> getPlayer(@PathVariable Long playerId) {
		return playerService.getPlayer(playerId);
	}
	
	@PostMapping
	public void registerNewPlayer(@RequestBody Player player) {
		playerService.addNewPlayer(player);
	}
	
	@DeleteMapping(path = "{playerId}")
	public void deletePlayer(@PathVariable("playerID") Long playerId) {
		playerService.deletePlayer(playerId);
	}
	
	@PutMapping(path = "{playerId}")
	public void updatePlayer(
			@PathVariable("playerID") Long playerId,
			@RequestParam(required = false) String name,
			@RequestParam(required = false) int age,
			@RequestParam(required = false) String country) {
		playerService.updatePlayer(playerId, name, age, country);
	} 
	
	@PutMapping()
	public void addPlayer(
			@RequestParam(required = false) String name,
			@RequestParam(required = false) int age,
			@RequestParam(required = false) String country) {
		System.out.println(name + " " + age + " " + country);
		playerService.addNewPlayer(new Player(name, age, country));
	} 
}
