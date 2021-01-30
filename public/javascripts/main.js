var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("background", "/images/level_1_backround.png");
  this.load.tilemapTiledJSON("level", "/levels/level1.json");
  this.load.image("sprute", "/images/Sprute.png");
}

function create() {
  this.add.image(0, 64, "background").setOrigin(0, 0);
  let level = this.make.tilemap({ key: "level" });
  let tiles = level.addTilesetImage("terrain", "sprute");
  let blockGroup = this.physics.add.staticGroup();
  var blockLayer = level.createLayer("Blocks", tiles, 0, 64);
  blockGroup.add(blockLayer);
}

function update() {}
