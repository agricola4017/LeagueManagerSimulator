package com.example.demo;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class PlayerConfig {
	@Bean
	CommandLineRunner commandLineRunner(PlayerRepository repository) {
		return args -> {
			Player mariam = new Player("Mariam", 18, "USA", 50, "TOP");
			Player alex = new Player("Alex", 18, "USA", 60, "TOP");			
			
			repository.saveAll(
					List.of(mariam,alex)
			);
		};
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/v1/player").allowedOrigins("http://localhost:3000", "http://localhost:3000/LeagueManagerSimulator", "https://agricola4017.github.io/LeagueManagerSimulator/");
			}
		};
	}
}
