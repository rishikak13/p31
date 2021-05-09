const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var rainfall = []

var engine, world;

var rand;

function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,1000);
    umbrellaa= new Umbrellaa(200,800);

    //create drops
    if(frameCount% 150=== 0){

    
    for(var i = 0;i< 100;i++){
        rainfall.push(new Drops(random(0,400),random(0,400)));
    }
}
    
}

function draw(){
    background(0);
    umbrellaa.display();
    for(var i = 0;i< 100;i++){
rainfall[i].display();
    }
}   

