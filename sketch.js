const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1;
var platform2;
var ball;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Platform(50,100,300,PI+30);
    platform2 = new Platform(250,250,300,PI+30);
    
    ball = new Ball(0,50,20,20);
}

function draw(){
    background(0);

    Engine.update(engine);
    
    platform1.display();
    platform2.display();

    ball.display();     
}

