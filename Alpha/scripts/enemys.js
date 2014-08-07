function skeleton(lv){
	enemy.apply(this);

	this.NPCtype="skeleton";
	this.health=16586474;
	this.level=lv;

}

function zombie(lv){

	enemy.apply(this);
	this.NPCtype="zombie";
	this.level=lv;
	this.maxEHealth=185;
	this.setHealthLevel();

}