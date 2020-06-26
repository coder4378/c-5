var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["30ad6ab4-d000-4f66-afb8-06787ce0198d","b550ea28-b50e-4089-bbed-987c1cd0aded","4a5b23e4-08aa-4afb-ad8d-55469d9fbb66","7914e528-7cfc-40d9-8528-18b37cf8238a","e5123743-8af2-4228-b053-a0be1d357a1d","a5cdd3dd-6dd0-4197-9b58-ed7cc27bee17"],"propsByKey":{"30ad6ab4-d000-4f66-afb8-06787ce0198d":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"4ZJ9ofTEaUXIQd04foE2KZkxpf_IZTfx","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/30ad6ab4-d000-4f66-afb8-06787ce0198d.png"},"b550ea28-b50e-4089-bbed-987c1cd0aded":{"name":"playerShip3_red_1","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"NnXM12gBEhjFfWxfxKfOgFYyK9Ir1M_q","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/b550ea28-b50e-4089-bbed-987c1cd0aded.png"},"4a5b23e4-08aa-4afb-ad8d-55469d9fbb66":{"name":"alienBlue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/M3Y6yblUgA68N4vaQ0koprONzbEGc5vW/category_characters/alienBlue.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"M3Y6yblUgA68N4vaQ0koprONzbEGc5vW","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/M3Y6yblUgA68N4vaQ0koprONzbEGc5vW/category_characters/alienBlue.png"},"7914e528-7cfc-40d9-8528-18b37cf8238a":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"fIP1buSEU0dhMcXPDyNlyab4xJjKFbSf","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7914e528-7cfc-40d9-8528-18b37cf8238a.png"},"e5123743-8af2-4228-b053-a0be1d357a1d":{"name":"alienGreen_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5WQRCkwjpezcyLKVtDmw2T6Zc739lgI6/category_characters/alienGreen.png","frameSize":{"x":66,"y":92},"frameCount":1,"looping":true,"frameDelay":2,"version":"5WQRCkwjpezcyLKVtDmw2T6Zc739lgI6","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":92},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5WQRCkwjpezcyLKVtDmw2T6Zc739lgI6/category_characters/alienGreen.png"},"a5cdd3dd-6dd0-4197-9b58-ed7cc27bee17":{"name":"enemyGreen1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xsrqTyODuU36entq5.q.XvNGnXCEnTWy/category_vehicles/enemyGreen1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"xsrqTyODuU36entq5.q.XvNGnXCEnTWy","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xsrqTyODuU36entq5.q.XvNGnXCEnTWy/category_vehicles/enemyGreen1.png"}}};
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

var back = createSprite(200, 200);
back.setAnimation("space_1");
var bullet = createSprite(200, 350);
bullet.setAnimation("animation_2");
var hero = createSprite(200, 350);
hero.setAnimation("playerShip3_red_1");
var enemy = createSprite(200, 200);
enemy.setAnimation("alienBlue_1");
var enemy1 = createSprite(80, 200);
enemy1.setAnimation("alienBlue_1");
var enemy2 = createSprite(320, 200);
enemy2.setAnimation("alienBlue_1");
var enemy3 = createSprite(120, 100);
enemy3.setAnimation("alienGreen_1");
var enemy4 = createSprite(270, 110);
enemy4.setAnimation("alienGreen_1");
var boss = createSprite(200, 50);
boss.setAnimation("enemyGreen1_1");
function draw() {
  if (keyDown("space")) {
    bullet.velocityY = -6;
  }
  if (keyDown("right")) {
    hero.velocityX = 3;
  }
  if (keyDown("left")) {
    hero.velocityX = -3;
  }
  if (keyDown("left")) {
    bullet.velocityX = -3;
  }
  if (bullet.isTouching(enemy1)) {
    enemy1.y = 450;
    bullet.y = 350;
    bullet.velocityY=0;
  }
  if (bullet.isTouching(enemy)) {
    enemy.y = 450;
    bullet.y = 350;
      bullet.velocityY=0;
  }
   if (bullet.isTouching(enemy2)) {
    enemy2.y = 450;
    bullet.y = 350;
     bullet.velocityY=0; 
  } 
  if (bullet.isTouching(enemy3)) {
    enemy3.y = 450;
    bullet.y = 350;
      bullet.velocityY=0;
  } 
   if (bullet.isTouching(enemy4)) {
    enemy4.y = 450;
    bullet.y = 350;
      bullet.velocityY=0;
  } 
    if (bullet.isTouching(boss)) {
    boss.x = randomNumber(10, 390);
    bullet.y = 350;
      bullet.velocityY=0;
  } 
  if (keyDown("right")) {
    bullet.velocityX = 3;
  }
  if (bullet.y>400) {
    bullet.y = 350;
  }
  drawSprites();
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
