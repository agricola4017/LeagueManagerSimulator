package com.example.demo;

public class Stats {

	private int OVR;
	private int POT;
	
	private int mental;
	private int lasthit;
	
	private int laning;
	private int roaming;
	
	private int teamfight;
	private int splitpush;
	
	private int rotations;
	
	private int objectiveControl;
	
	private int duel;
	
	private int confidence;
	
	private int expJgl;
	private int expMid;
	private int expAdc;
	private int expSpt;
	private int expTop;
	
	public Stats(int pOT, int mental, int lasthit, int laning, int roaming, int teamfight, int splitpush, int rotations,
			int objectiveControl, int duel, int confidence) { //maybe add role
		super();
		POT = pOT;
		this.mental = mental;
		this.lasthit = lasthit;
		this.laning = laning;
		this.roaming = roaming;
		this.teamfight = teamfight;
		this.splitpush = splitpush;
		this.rotations = rotations;
		this.objectiveControl = objectiveControl;
		this.duel = duel;
		this.confidence = confidence;
	}
	
	public Stats() {
		//auto generate function
	}

	public int getOVR() {
		return OVR;
	}
	
	public void updateOVR() {
		//to do formula for OVR
		setPOT(this.OVR);
	}
	public int getPOT() {
		return POT;
	}
	
	public void setPOT(int pOT) {
		if (pOT > this.OVR) {
			POT = pOT;
		} else {
			pOT = this.OVR;
		}
	}
	public int getMental() {
		return mental;
	}
	public void setMental(int mental) {
		this.mental = mental;
		updateOVR();
	}
	public int getLasthit() {
		return lasthit;
	}
	public void setLasthit(int lasthit) {
		this.lasthit = lasthit;
		updateOVR();
	}
	public int getRoaming() {
		return roaming;
	}
	public void setRoaming(int roaming) {
		this.roaming = roaming;
		updateOVR();
	}
	public int getTeamfight() {
		return teamfight;
	}
	public void setTeamfight(int teamfight) {
		this.teamfight = teamfight;
		updateOVR();
	}
	public int getSplitpush() {
		return splitpush;
	}
	public void setSplitpush(int splitpush) {
		this.splitpush = splitpush;
		updateOVR();
	}
	public int getRotations() {
		return rotations;
	}
	public void setRotations(int rotations) {
		this.rotations = rotations;
		updateOVR();
	}
	public int getObjectiveControl() {
		return objectiveControl;
	}
	public void setObjectiveControl(int objectiveControl) {
		this.objectiveControl = objectiveControl;
		updateOVR();
	}
	public int getDuel() {
		return duel;
	}
	public void setDuel(int duel) {
		this.duel = duel;
		updateOVR();
	}
	public int getConfidence() {
		return confidence;
	}
	public void setConfidence(int confidence) {
		this.confidence = confidence;
		updateOVR();
	}
	
	public int getExpJgl() {
		return expJgl;
	}
	public void setExpJgl(int expJgl) {
		this.expJgl = expJgl;
	}
	public int getExpMid() {
		return expMid;
	}
	public void setExpMid(int expMid) {
		this.expMid = expMid;
	}
	public int getExpAdc() {
		return expAdc;
	}
	public void setExpAdc(int expAdc) {
		this.expAdc = expAdc;
	}
	public int getExpSpt() {
		return expSpt;
	}
	public void setExpSpt(int expSpt) {
		this.expSpt = expSpt;
	}
	public int getExpTop() {
		return expTop;
	}
	public void setExpTop(int expTop) {
		this.expTop = expTop;
	}
	public int getLaning() {
		return laning;
	}
	public void setLaning(int laning) {
		this.laning = laning;
		updateOVR();
	}
	
	
}
