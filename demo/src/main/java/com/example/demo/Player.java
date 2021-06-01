package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Player {
	@Id
	@SequenceGenerator(
			name = "player_sequence",
			sequenceName = "player_sequence",
			allocationSize = 1
	)
	@GeneratedValue ( 
			strategy = GenerationType.SEQUENCE,
			generator = "player_sequence"
	)
	
	private Long id;
	private String name;
	private int age;
	private String country;
	private int askingFor;
	//private Stats stats;
	//private History hist;
	private String role;
	//private Team team;
	
	
	
	public Player(Long id, String name, int age, String country, int askingFor, String role) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.country = country;
		this.askingFor = askingFor;
		//this.stats = stats;
		//this.hist = hist;
		this.role = role;
		//this.team = team;
	}

	public Player(String name, int age, String country, int askingFor, String role) {
		super();
		this.name = name;
		this.age = age;
		this.country = country;
		this.askingFor = askingFor;
		//this.stats = stats;
		//this.hist = hist;
		this.role = role;
		//this.team = team;
	}
	
	public Player(String name, int age, String country) {
		this.name = name;
		this.age = age;
		this.country = country;
		//todo rest gen
	}
	
	public Player() {
		super();
		//todo autogen
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getAskingFor() {
		return askingFor;
	}
	public void setAskingFor(int askingFor) {
		this.askingFor = askingFor;
	}
	/*
	 * public Stats getStats() { return stats; } public void setStats(Stats stats) {
	 * this.stats = stats; }
	 */
	/*
	 * public History getHist() { return hist; } public void setHist(History hist) {
	 * this.hist = hist; }
	 */

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	/*
	 * public Team getTeam() { return team; }
	 * 
	 * public void setTeam(Team team) { this.team = team; }
	 */
	
	
} 
