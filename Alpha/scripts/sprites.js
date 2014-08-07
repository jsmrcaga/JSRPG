//Dungeon Sprites
var
	sprite_floor,
	sprite_RUCorner,
	sprite_R,
	sprite_RLight,
	sprite_RDCorner,
	sprite_LUCorner,
	sprite_L,
	sprite_LLight,
	sprite_LDCorner,
	sprite_U,
	sprite_ULight,
	sprite_D,
	sprite_DLight;


function sprite(img, x, y ,width,height){

	this.image= new Image;
	this.image.src=img;
	this.x=x;
	this.y=y;
	this.width=width*4; //=15*4=60
	this.height=height*4;

	this.draw=function(context, x, y){
		canX.drawImage(this.image, this.x, this.y, width, height,x, y, this.width, this.height);

	}

}

function initSprite(img){
	sprite_floor= new sprite(img,45,45,15,15);
	sprite_L=new sprite(img, 0,15,15,15);
	sprite_D= new sprite(img, 15, 90, 15, 15);
	sprite_U= new sprite(img, 15, 0 ,15, 15);
	sprite_R = new sprite(img, 90, 15, 15, 15);
	sprite_RUCorner= new sprite(img, 90, 0, 15, 15);
	sprite_RDCorner= new sprite(img, 90,90, 15, 15);
	sprite_LUCorner= new sprite(img, 0,0,15,15);
	sprite_LDCorner= new sprite(img, 0,90, 15, 15);
	console.log("Floor stats: W:"+sprite_floor.width+"; H:"+sprite_floor.height);
}