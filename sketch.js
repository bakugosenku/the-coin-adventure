let level1 = [
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '                ',
  '        gg      ',
  'ggggggggdddddggg',
  '        dd      ',
  '       s dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  '       sdd      ',
  'dddddddddddddddd',
  '        dd      ',
  '      s dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '      s dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '       sdd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '      s dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '       sdd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '      s dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '       sdd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '    s   dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '      c dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '       sdd      ',
  'dddddddddddddddd',
  'dddddddddddddddd',
  '        dd      ',
  '     s  dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '     s  dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '     s  dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '      s dd      ',
  'dddddddddddddddd',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '        dd      ',
  '        dd      ',
  'dddddddddddddddd',
  '        dd      ',
  '     f  dd  f   ',
  'dddddddddddddddd',


























































































]







function preload() {
  playerSheet = loadImage('assets/sprites/knight.png');
  worldSheet = loadImage('assets/sprites/world_tileset.png');
  coinSheet = loadImage("assets/sprites/coin.png")
 slimeSheet = loadImage("assets/sprites/slime_purple.png")
 fruitSheet = loadImage("assets/sprites/fruit.png")

}
















function setup() {
  createCanvas(innerWidth, innerHeight);

  //creation joueur
  player = new Sprite();
  player.w = 13
  player.h = 18
  player.rotationLock = true;
  player.spriteSheet = playerSheet;
  player.scale = 4
  player.addAni({ w: 32, h: 32, col: 0, row: 0, frames: 4, frameDelay: 8 })
  player.debug = true;
  player.anis.offset.y = -3

  //creation blocs
  grass = new Group();
  grass.spriteSheet = worldSheet;
  grass.addAni({ w: 16, h: 16, col: 0, row: 0 });
  grass.collider = 'static'
  grass.tile = 'g';

  //creation blocs
  dirt = new Group();
  dirt.spriteSheet = worldSheet;
  dirt.addAni({ w: 16, h: 16, col: 1, row: 1 });
  dirt.collider = 'static'
  dirt.tile = 'd';

  //creation blocs
  coin = new Group();
  coin.spriteSheet = coinSheet;
  coin.addAni({ w: 16, h: 16, col: 0, row: 0, });
  coin.collider = 'static'
  coin.tile = 'c';

//creation blocs
  slime = new Group();
  slime.spriteSheet = slimeSheet;
  slime.addAni({ w: 16, h: 16, col: 0, row: 0, });
  slime.collider = 'static'
  slime.tile = 's';

//creation blocs
  fruit = new Group();
  fruit.spriteSheet = fruitSheet;
  fruit.addAni({ w: 16, h: 16, col: 0, row: 0, });
  fruit.collider = 'static'
  fruit.tile = 'f';



































  tiles = new Tiles(level1, 0, 0, 16 * 4, 16 * 4)
  tiles.scale = 4;


















  platforms = new Group();






  world.gravity.y = 39.81
}

function draw() {
  background(51);

  camera.y = player.y
  camera.x = player.x

  if (kb.pressing('left')) {
    player.vel.x = -6;
    player.mirror.x = true;
  }
  if (kb.pressing('right')) {
    player.vel.x = 6;
    player.mirror.x = false;
  }

  if (player.colliding(tiles)) {

    if (kb.pressing('up')) {
      player.vel.y = -16;
    }
  }

  if (player.overlaps(coin)){
    coin.remove();

  }

if (player.overlaps(fruit)){
    fruit.remove();

  }








}