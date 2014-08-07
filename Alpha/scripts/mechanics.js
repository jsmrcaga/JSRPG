function attack(NPC, hitPoints, bonus){
	var hit=((bonus/100)+1)*hitPoints;
	hit*=(1-(NPC.getDefence()/100));
	alert("Hit:"+hit);
	NPC.setHealth(NPC.getHealth()-hit);
	checkDeath(NPC);
}

function checkDeath(NPC){
	if (NPC.getHealth()<=0){
		NPC.kill();
	}
}