var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","984d43b1-6ac1-4ebb-8a8c-def12b4b6091"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png","frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"iF7T0xvXg4hvcA1s_0MnNek48VDGX7xQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robot","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"FFPmMb5sTrCTMxc_5ZQdO9x4muzUn9Oj","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"player","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"g1MxlqITMiG29MUqOv7YpltcdHfczyPY","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"tLLUQ1ZlQ1DPMDnyk_R4nUpD8zLHtzT0","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"player_fall","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"6fvld8Ainq80iWfEbpAGjzY66TkaHlLh","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"984d43b1-6ac1-4ebb-8a8c-def12b4b6091":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"0rEyPyLaGTHmeA2XcG4JLelY0WySwedW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/984d43b1-6ac1-4ebb-8a8c-def12b4b6091.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create the ball, playerPaddle and computerPaddle as sprite objects
var ball = createSprite(200,200,10,10);
ball.setAnimation("ball");
var playerPaddle = createSprite(380,200,10,70);
var computerPaddle = createSprite(10,200,10,70);

//variable to store different state of game
var gameState = "serve";

//variables to keep the score
var compScore = 0;
var playerScore = 0;


function draw() {
  //clear the screen
  background("white");
  
  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
   
   //add sound if my player or computer player hits the ball
   if(ball.isTouching(playerPaddle)|| ball.isTouching(computerPaddle))
   {
     playSound("assets/hit.mp3");
     
   }
   
  //display scores
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  
 
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
  
  //serve the ball when space is pressed
  if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    
    if(ball.x > 400) {
      compScore = compScore + 1;
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1;
    }
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}

function serve() {
  ball.velocityX = 13;
  ball.velocityY = 14;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
