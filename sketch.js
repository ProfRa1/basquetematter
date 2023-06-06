const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;
var poly;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    rectMode(CENTER);
    ellipseMode(RADIUS);

    var options = {
        isStatic: true,
    };

    var options2 = {
        restitution: 0.9,
    };

    ball = Bodies.circle(50, 10, 10, options2);
    World.add(world, ball);

    ground = Bodies.rectangle(200, 380, 400, 20, options);
    World.add(world, ground);

    parede = Bodies.rectangle(10, 200, 20, 400, options);
    World.add(world, parede);

    parede2 = Bodies.rectangle(390, 200, 20, 400, options);
    World.add(world, parede);

    teto = Bodies.rectangle(200, 10, 400, 20, options);
    World.add(world, teto);
}

function draw() {
    background(51);
    Engine.update(engine);
    fill("orange");
    ellipse(ball.position.x, ball.position.y, 10, 10);
    fill("grey");
    rect(ground.position.x, ground.position.y, 400, 20);
    rect(parede.position.x, parede.position.y, 20, 400);
    rect(parede2.position.x, parede2.position.y, 20, 400);
    rect(teto.position.x, teto.position.y, 400, 20);
}
