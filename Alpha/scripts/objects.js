var player ={
	exp: 0,
	health:null,
	max_health: null,
	level :0,
	name : null,
	sprite: null,

	getHealth : function(){
		return this.health;
	},

	getExp : function(){
		return this.exp;
	},

	getLevel : function(){
		return this.level;
	},

	getName : function(){
		return this.name;
	},

	setName: function(newName){
		this.name=newName;
	},

	setLevel: function (newLevel){
		this.level=newLevel;
	},

	draw: function(){
		var img=document.getElementById("perso1");
		canX.drawImage(img,(canvas.width-img.width)/2,(canvas.height-img.height)/2 );
	},

	currentPosition:{
		x:0,
		y:0
	}



}



function NPC (s){
	this.type=null;
	this.speed=s;

	draw = function(){

	};
} 

function enemy(h,mh,mEh,hp,d){
	NPC.apply(this);

	this.level=-1;
	this.health=h;
	this.maxEHealth=mEh;
	this.hitPoints=hp;
	this.defence=d;
	this.alive=true;
	this.maxHealth=mh;

	this.kill=function(){
		this.alive=false;
	}

	this.getHealth=function(){
		return this.health;
	}

	this.setHealth=function(newHealth){
		this.health= newHealth;
	}

	this.getDefence=function(){
		return this.defence;
	}

	this.getLifeStatus=function(){
		if (this.alive==true){
			return "alive";
		}else{
			return "dead";
		}
	}

	this.setHealthLevel=function(){
		
		var nHealth=this.maxEHealth*(this.level/100);
		
		if (nHealth<this.maxEHealth*0.25){
			this.maxHealth=Math.ceil(this.maxEHealth*0.25);
		}else{
			this.maxHealth=Math.ceil(nHealth);
		}
	}

	this.getMaxHealth=function(){
		return this.maxHealth;
	}

	this.getPercentHealth=function(){
		return (((this.health)/(this.maxHealth))*100); 
	}
}


	

function grid(){

	this.width=0;
	this.height=0;

	this.i99=0;
	this.j99=0;

	this.x_coord=0;
	this.y_coord=0;
	this.x_coordAbsolute=0;
	this.y_coordAbsolute=0;
	this.x_length=0;
	this.y_length=0;

	this.getHeight=function(){
		return heightC;
	};

	this.getWidth=function(){
		return widthC;
	};

	this.getCubeHeight=function(){
		return heightC*60;
	};

	this.getCubeWidth=function(){
		return widthC*60;
	};

	//hard-coded for test purposes
	this.table=[
			[5,1,6,10,10,5,1,1],
			[4,0,2,10,10,4,0,0],
			[4,0,8,1,1,7,0,2],
			[4,0,0,0,0,0,0,2],
			[4,0,0,0,0,0,0,2],
			[4,0,0,0,0,0,0,2],
			[4,0,0,0,0,0,0,2],
			[4,0,0,0,0,0,0,2],
			[4,0,0,0,0,0,0,2],
			[4,0,0,0,0,0,0,2],
			[4,0,0,0,0,0,0,2],
			[4,99,0,0,0,0,0,2],
			[8,3,3,3,3,3,3,7]
	];

	this.calcCoord=function(){
		//find position of 99
		for (var i = 0; i < this.table.length; i++) {
			for(var j=0; j<this.table[i].length;j++){
				if(this.table[i][j]==99){
					this.i99=i;
					this.j99=j;
					break;
				} 
			}
		}
		console.log("Position of 99 in grid ("+this.j99+","+this.i99+")");
		this.x_length=(this.j99+1)*60-30;
		this.y_length=(this.i99+1)*60-30;

		// player.currentPosition=[this.j99,this.i99];
		player.currentPosition.x=this.j99;
		player.currentPosition.y=this.i99;

		console.log("Player Position: ["+ player.currentPosition.x+";"+player.currentPosition.y+"]");
		console.log("Position of 99 in grid ("+this.x_length+","+this.y_length+")");
		
		console.log("Canvas width: "+WIDTH_CANVAS);
		console.log("Canvas height: "+HEIGHT_CANVAS);

		this.x_coord=(WIDTH_CANVAS/2)-(this.x_length);
		this.y_coord=(HEIGHT_CANVAS/2)-(this.y_length);
		this.x_coordAbsolute=(WIDTH_CANVAS/2)-(this.x_length);
		this.y_coordAbsolute=(HEIGHT_CANVAS/2)-(this.y_length);

		console.log("Found coord: ("+this.x_coord+","+this.y_coord+")");

		this.width=this.table[0].length*60;
		this.height=this.table.length*60;
		console.log("Floor width: "+this.width+" ; Floor Height: "+this.height);
	};



	this.draw=function(){

	   	canX.fillStyle="#f00";

	   	for(var i=0; i<this.table.length; i++){
	   		for(var j=0; j<this.table[i].length; j++){
	   			switch(this.table[i][j]){
	   				case 0: case 99:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 1:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_U.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 2:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_R.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 3:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_D.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 4:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_L.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	  				case 5:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_LUCorner.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 6:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_RUCorner.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 7:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_RDCorner.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 8:
	   					sprite_floor.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					sprite_LDCorner.draw(canX,this.x_coord+(j*60), this.y_coord+(i*60));
	   					break;
	   				case 10:
	   					break;
	   			}
	   			
	   		}
	   	}
	};


	this.calculatePlayerPos= function(){
		var movX, movY;
		var blocksX, blocksY;
		movX=this.x_coord-this.x_coordAbsolute;
		movY=this.y_coord-this.y_coordAbsolute;
		blocksX = Math.round(movX/60);
		blocksY = Math.round(movY/60);
		//player.currentPosition [x,y] => [j99,i99] at first (which is position of 99);
		// player.currentPosition=[this.j99-blocksX, this.i99-blocksY];
		player.currentPosition.x=this.j99-blocksX;
		player.currentPosition.y=this.i99-blocksY;

	}

	this.update=function(){
		this.calculatePlayerPos();

		//We use player position within the grid to find next block and compare if not wall

		if (keystate[KEY_S]) {
			if (this.table[player.currentPosition.y+1][player.currentPosition.x]<=1) this.y_coord -= 3;
		}

		if (keystate[KEY_W]){
			if (this.table[player.currentPosition.y-1][player.currentPosition.x]<=1) this.y_coord += 3;
		}

		if (keystate[KEY_A]){
			if (this.table[player.currentPosition.y][player.currentPosition.x-1]<=1) this.x_coord += 3;
		} 

		if (keystate[KEY_D]){
			if (this.table[player.currentPosition.y][player.currentPosition.x+1]<=1) this.x_coord -= 3;
		} 
	}
}

//Format for dungeon:



dungeon={
	//number of floors depends on difficulty
	//dif 1 => 1<F<2
	//dif 2 => 1<F<4
	//dif 3 => 3<R<5
	numberFloors:0,
	currentFloor:0,
	floors:[]//[FLOOR]
}

function floor(){

	//number of rooms depends on difficulty
	//dif 1 => 3<R<5
	//dif 2 => 3<R<7
	//dif 3 => 5<R<8

	this.numberRooms=0;
	this.number=0;
	this.rooms= new Array();//[ROOM],
	this.grid = new grid();// [][]

	this.setNumberRooms= function(){
		var numRooms;
		

		switch(difficulty){
			case 1:
				numRooms=Math.round(Math.random()*2+3);
				break;
			case 2:
				numRooms=Math.round(Math.random()*4+3);
				break;
			case 3:
				numRooms=Math.round(Math.random()*3+5);
				break;
			default:
				numRooms=4654;
		}

		this.numberRooms=numRooms;
	}

	
}
