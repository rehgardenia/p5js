let posVertical;

function setup() {
  createCanvas(500,500);
  posVertical = 250;
}

function draw(){
  
  if(posVertical < 400){
   background("lightblue");
    posVertical += 1;
  }
  else{
     background("darkblue");
  }
  
  fill("orange");
  circle(250,posVertical,300);   // x, y , diametro

  fill("darkblue");
  rect(0,300,500,350);  // x, y, largura, altura
 
  fill("khaki");
  rect(0,400,500,100);
}
