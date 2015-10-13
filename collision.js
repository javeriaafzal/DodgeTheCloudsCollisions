var vplane = document.getElementById("plane");
var v_mov_obj   = document.getElementById("mov_obj");
var v_mov_obj1   = document.getElementById("mov_obj1");
//We could use getComputedStyle to get the style props,
//but I'm lazy
vplane.style.top = "130px";
vplane.style.height = "100px";
vplane.style.width="100px";
vplane.style.left="50px";



//For every 33ms (about 30fps)
setInterval(function(){
    
    //Get the height and position of the player
	var vplanekastyle = window.getComputedStyle(vplane,null);
	console.log(vplanekastyle);
    var charTop    = parseInt(vplanekastyle.top);
    var charHeight = parseInt(vplanekastyle.height);
    var charWidth = parseInt(vplanekastyle.width);
	var charLeft = parseInt(vplanekastyle.left);
    //and the top of the ground
	var v_mov_obj_style = window.getComputedStyle(v_mov_obj,null);
	var v_mov_obj_style1 = window.getComputedStyle(v_mov_obj1,null);
	console.log(v_mov_obj_style);
    var enemyTop = parseInt(v_mov_obj_style.top);
    var enemyLeft = parseInt(v_mov_obj_style.left);
	var enemyHeight=parseInt(v_mov_obj_style.width);
	var enemyBottom=enemyTop+enemyHeight;
	
	var enemy1Top = parseInt(v_mov_obj_style1.top);
    var enemy1Left = parseInt(v_mov_obj_style1.left);
	var enemy1Height=parseInt(v_mov_obj_style1.width);
	var enemy1Bottom=enemy1Top+enemy1Height;
    //linear gravity? Why now?
    //charTop += 5;
    
    //If the character's bottom is hitting the ground,
    //Stop moving
	//console.log("enemy top:"+enemyTop);
	console.log("charTop:"+charTop +" "+ charHeight );
	//console.log("charbot:"+enemyBottom +" "+ charHeight );
    if(enemyTop<charTop+charHeight &&  enemyLeft<charLeft+charWidth) {
		
        //charTop = groundTop - charHeight;
		alert("You collided!");

    }
	
	  if(enemy1Top<charTop+charHeight &&  enemy1Left<charLeft+charWidth) {
		
        //charTop = groundTop - charHeight;
		alert("You collided!");

    }
	
	
    
       
    
},33);