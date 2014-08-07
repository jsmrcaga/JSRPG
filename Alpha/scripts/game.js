//CONSTANTS 
var canvas=document.getElementById("canvas");
var canX= canvas.getContext("2d");
var CUBE_SIZE =45;
var HEIGHT_CANVAS=0;
var WIDTH_CANVAS=0;

var currentFloor;
var difficulty;

var frames=0;
var sec=0;
var fps=0;
var keystate=[];

var nGrid=new grid();

//KEYS
KEY_A= 65,
KEY_D= 68,
KEY_W= 87,
KEY_S= 83

function main(){
	
	 
	init();
	loop();
}

function init(){

	//Set canvas height to viewport, according to new standards
	HEIGHT_CANVAS=window.innerHeight;
	WIDTH_CANVAS=window.innerWidth;
	console.log(WIDTH_CANVAS+":"+HEIGHT_CANVAS);
	canX.imageSmoothingEnabled = false;
	

	canvas.width=WIDTH_CANVAS;
	canvas.height=HEIGHT_CANVAS;

	initSprite("./images/sprites/backgroundSheet1.png");
	//Add keylisteners
	document.addEventListener("keydown", function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keystate[evt.keyCode];
	});

	askName(); //checks the cookie first, TODO: change name of cookie
	// askDifficulty(); //asks the difficulty with a prompt TODO: make GUI to ask difficulty, make MENU
	

	//DEBUG
	// *****************************
	// var monster2 =new (skeleton);
	// alert(monster2.health);
	// alert(monster2.NPCtype);
	// var monster3 = new zombie(45);
	// alert(monster3.level);
	// alert("Zombie max health at lv 45: "+monster3.getMaxHealth());
	// alert(grid.table.toString());
	// alert(greatHall.config[4][4]);

	
	// var room1=new floor;
	// room1.setNumberRooms();
	// alert("Room1 rooms:" + room1.numberRooms);
	// *****************************
	nGrid.calcCoord();
	//begin second countdown
	var fpsDrawer=setInterval(calcFPS, 1000);
}

function loop(){
	update();
	draw();
	window.requestAnimationFrame(loop, canvas);
}

function update(){
	frames++;
	nGrid.update();
	//ACTIONS CODE
	//NEW ALGORITHM 
	// make objects like
	// object={
	// 	type:'chest...',
	// 	onOpen: functionToExectue(),
	// 	coord:{
	// 		x:4,
	// 		y:5
	// 	}
	// }
}

function draw(){
	canX.imageSmoothingEnabled = false;

	drawBG();
	
	nGrid.draw();

	drawName();
	drawFPS();
	player.draw();
	
	//draw lines to find center
		// canX.fillStyle="#FFF";
		// canX.beginPath();
		// canX.moveTo(WIDTH_CANVAS/2,0);
		// canX.lineTo(WIDTH_CANVAS/2,HEIGHT_CANVAS);
		// canX.stroke();
		// canX.beginPath();
		// canX.moveTo(0,HEIGHT_CANVAS/2);
		// canX.lineTo(WIDTH_CANVAS,HEIGHT_CANVAS/2);
		// canX.stroke();
}

main();
