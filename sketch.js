//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  Dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(350, 250, 10, 10);
  dog.addImage(Dog);

  firebase = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(32);
  stroke("red");
  fill("white");
  text("NOTE : Press UP ARROW KEY to feed the dog milk!", 150, 100);
  text("Food REMAINING! = " + foodS, 150, 175);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

