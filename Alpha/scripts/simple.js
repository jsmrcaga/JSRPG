
function askName () {

	if (getCookie("playerName")!=""){
		//console.log("indexOf playerName ="+currentCookie.indexOf("playerName"));
		player.setName(getCookie("playerName"));
	}else{
		newName=prompt("Please select a name for your character:");
		//Name asking
		while (newName.length>10 || newName.length<1){
			newName=prompt("Name length:"+newName.length+"\nMake sure the name is less than 15 char:");
		}

		player.setName(newName);
		setCookie("playerName", newName, 30);
	}
}

function drawName(){
	//Shadow
	   	canX.fillStyle = '#000';
		canX.font = '15pt Trajan Pro';
		canX.textAlign="center";
	   	canX.fillText(player.getName(),(canvas.width/2)+1, 10+16);
	//Player Name
	canX.fillStyle = '#FFFFFF';
	canX.font = '15pt Trajan Pro';
	canX.textAlign="center";
   	canX.fillText(player.getName(),(canvas.width/2), 10+15);
}

function calcFPS () {
	sec++;
	fps= frames/sec;
	// console.log("Drawn, Frames: "+fps);
}

function drawFPS () {
	canX.fillStyle = '#FFFFFF';
	canX.font = '15pt Trajan Pro';
	canX.textAlign="left";
   	canX.fillText("FPS: "+Math.round(fps),15, 25);
   	// canX.fillText("Frames: "+frames,15, 45);
   	// canX.fillText("Seconds: "+sec,15, 65);
}


function drawBG () {
	canX.fillStyle   = '#272822'; // set canvas background color
	canX.fillRect  (0, 0, canvas.width, canvas.height);  // now fill the canvas
}







//COOKIE FUNCTIONS
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function calcCubeWidth(){
	var winW=window.innerWidth;

}

function calcCubeHeight(){
	var winH=window.innerHeight;
	return 0;
}


function askDifficulty () {
	do{
		difficulty=Number(prompt("Choose your difficulty (1 2 3):"));
		
	}while (difficulty<1 || difficulty>3);

}


function initRandomizeRoom(floor){
	var floorRooms;
	switch(floor.number){
		case 1:
			floorRooms=floor1Rooms;
			break;
		case 2:

			break;
		case 3:

			break;
		case 4:

			break;
		case 5:

			break;
		default:

	}

}