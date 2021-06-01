package com.example.demo;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/*@Entity
@Table*/
public class Team {
	/*
	 * @Id
	 * 
	 * @SequenceGenerator( name = "team_sequence", sequenceName = "team_sequence",
	 * allocationSize = 1 )
	 * 
	 * @GeneratedValue ( strategy = GenerationType.SEQUENCE, generator =
	 * "team_sequence" )
	 */
	private long cash;
	private long profit; 
	private String name;
	private String region;
	private List<Player> players;
	private int scouts;
	private int coaches;
	private int house;
	//private TeamHistory;
	
	
	
	public long getCash() {
		return cash;
	}
	public Team(String name) {
		super();
		this.name = name;
		//auto generate rest 
	}
	public void setCash(long cash) {
		this.cash = cash;
	}
	public long getProfit() {
		return profit;
	}
	public void setProfit(long profit) {
		this.profit = profit;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public List<Player> getPlayers() {
		return players;
	}
	public void setPlayers(List<Player> players) {
		this.players = players;
	}
	public int getScouts() {
		return scouts;
	}
	public void setScouts(int scouts) {
		this.scouts = scouts;
	}
	public int getCoaches() {
		return coaches;
	}
	public void setCoaches(int coaches) {
		this.coaches = coaches;
	}
	public int getHouse() {
		return house;
	}
	public void setHouse(int house) {
		this.house = house;
	}
	
}
