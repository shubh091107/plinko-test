const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine
var world

var ground

var divheight = 300


var particle = []
var div = []
/*var div1
var div2
var div3
var div4
var div5
var div6
var div7*/

function setup() {
  engine = Engine.create()
  world = engine.world;
  Engine.run(engine)
  createCanvas(480,800);
  ground = new Ground()

 /*div1 = new Division(10,680)
  div2 = new Division(80,680)
  div3 = new Division(150,680)
  div4 = new Division(220,680)
  div5 = new Division(290,680)
  div6 = new Division(360,680)
  div7 = new Division(430,680)*/
}

function draw() {
  Engine.update(engine)
  background(0);  
  ground.display()


  if (frameCount%90 === 0 ){
    particle.push(new Particle(random(0,450),0,10,10));
  }
  for (var g = 0 ; g <= 480 ; g = g+80){
    div.push(new Division(g,800-divheight,10,divheight))
   }

   div.display()
}