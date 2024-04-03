var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c19b5f97-71d7-4753-9961-05bfc202b997","adafa309-ee68-4313-8769-04b4033a75d8","2de959c5-d6f4-4c0e-9e3b-017fe7ef03d0","10b02e8a-389f-492d-a439-5f200568814c"],"propsByKey":{"c19b5f97-71d7-4753-9961-05bfc202b997":{"name":"Hol","sourceUrl":"assets/api/v1/animation-library/gamelab/oVshw5o41I5Jtg4O3FBPYdrjiViICQLV/category_food/american_applepie.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"oVshw5o41I5Jtg4O3FBPYdrjiViICQLV","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVshw5o41I5Jtg4O3FBPYdrjiViICQLV/category_food/american_applepie.png"},"adafa309-ee68-4313-8769-04b4033a75d8":{"name":"fon","sourceUrl":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hzoueTEpVpUpDkcmb6puB.nWTgQBwcqz/category_backgrounds/underground.png"},"2de959c5-d6f4-4c0e-9e3b-017fe7ef03d0":{"name":"Video","sourceUrl":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png","frameSize":{"x":98,"y":63},"frameCount":1,"looping":true,"frameDelay":2,"version":"Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":63},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png"},"10b02e8a-389f-492d-a439-5f200568814c":{"name":"aliem","sourceUrl":"assets/api/v1/animation-library/gamelab/yoXBG2L287khtgsZxziHgV12eUhQwZRS/category_fantasy/alienBlue.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"yoXBG2L287khtgsZxziHgV12eUhQwZRS","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yoXBG2L287khtgsZxziHgV12eUhQwZRS/category_fantasy/alienBlue.png"}}};
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

var fon = createSprite(200,200) ;
fon.setAnimation("fon");

var playerPaddle = createSprite(390, 200, 10,70);
playerPaddle.setAnimation("Video");
   var computerPaddle = createSprite(10, 200, 10,70);
   computerPaddle.setAnimation("aliem");
  var ball = createSprite(200,200,15,15);
   ball.setAnimation("Hol");
   ball.scale = 0.1;
  playerPaddle.shapeColor="Blue";
   computerPaddle.shapeColor="Red";
createEdgeSprites();


function draw() {
  

  
   ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  
  if(keyDown("up")){
   playerPaddle.y = playerPaddle.y -10;
   
  }
  if (keyDown("space")){
  playSound("assets/category_achievements/melodic_win_1.mp3");
   ball.velocityY=3;
  ball.velocityX=2;
}
  if (keyDown("down")){
  playerPaddle.y = playerPaddle.y +10; 
  }
  if(ball.isTouching(playerPaddle)||ball.isTouching(computerPaddle)){
  playSound("assets/category_jump/ninja_jump_2.mp3");
  ball.velocityX=-3;
    
  }
    computerPaddle.y=ball.y;
  drawnet();
  drawSprites();
  }
function drawnet()
{
  for(var num =0; num<400;num=num+20)
  {
    line(200,num,200, num+10);
  }
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
