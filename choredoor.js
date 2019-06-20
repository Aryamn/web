let doorimage1=document.getElementById("door1");
let doorimage2=document.getElementById("door2");
let doorimage3=document.getElementById("door3");
let current=true;

let botDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let closedDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;

let start=document.getElementById("start");

function isBot(door)
{
  if(door.src===botDoorPath)
    return true;
  
  else
    return false;
  
}

function gameOver(status)
{
    
   current =false;
  if(status==='win')
    start.innerHTML='You win! Play again?';
  
  else
    start.innerHTML='Game over! Play again?';
  
  
}

function isClicked(door)
{
  if(door.src===closedDoorPath)
    	return false;
  
  else
    return true;
}

function playDoor(door)
{
  numClosedDoors--;
  
  if(  !numClosedDoors)
    	gameOver('win');
  
  else if(isBot(door))
    gameOver('lose');
    	
}

function randomChoreDoorGenerator()
{
  let choreDoor=Math.floor(Math.random()*3);
  
  if(choreDoor===0)
    {
      openDoor1=botDoorPath;
      openDoor2=beachDoorPath;
      openDoor3=spaceDoorPath;
    }
  
  else if(choreDoor===1)
    {
      openDoor2=botDoorPath;
      openDoor1=beachDoorPath;
      openDoor3=spaceDoorPath;
    }
  
  else
    {
      openDoor3=botDoorPath;
      openDoor2=beachDoorPath;
      openDoor1=spaceDoorPath;
    }
}

randomChoreDoorGenerator();

if(!isClicked(doorimage1) && current)
{
doorimage1.onclick=function() {
  doorimage1.src=openDoor1;
  playDoor(doorimage1);
}
}

if(!isClicked(doorimage2) && current)
{
doorimage2.onclick=function(){
   doorimage2.src=openDoor2;
  playDoor(doorimage2);
}
}

if(!isClicked(doorimage3) && current)
{
doorimage3.onclick=function(){
   doorimage3.src=openDoor3;
  playDoor(doorimage3);
}
}

function startRound()
{
  numClosedDoors=3;
  start.innerHTML='Good luck!';
  current=true;
  doorimage1.src=closedDoorPath;
  doorimage2.src=closedDoorPath;
  doorimage3.src=closedDoorPath;
  
}

randomChoreDoorGenerator();

start.onclick=function(){
  startRound();
}
