import Phaser from 'phaser';

export class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    this.background = this.add.tileSprite(0, 0, this.width, this.height, 'bg');
    this.background.setOrigin(0, 0);

    // Add enemy to the scene
    this.enemy = this.add.sprite(
      this.background.width,
      this.background.height / 2,
      'enemy'
    );
    this.enemy.play('chomper_anim');

    // Add player to scene
    this.player = this.physics.add.sprite(100, 300, 'player');
    this.player.setCollideWorldBounds(true);

    // Map keyboard keys
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.add.text(20, 20, 'Playing Game...', {
      font: '25px Arial',
      color: 'yellow'
    });
  }

  update() {
    this.background.tilePositionX += 1;
    this.moveEnemy(this.enemy, 2);
    this.movePlayerManager();
  }

  // Helper functions
  movePlayerManager() {
    if (this.cursorKeys.up.isDown) {
      this.player.y -= 4;
      this.player.setFrame(0);
    } else {
      this.player.y += 4;
      this.player.setFrame(1);
    }
  }

  moveEnemy(enemy, speed) {
    enemy.x -= speed;
    if(enemy.x <= 0) {
      this.resetEnemyPosition(enemy);
    }
  }

  resetEnemyPosition(enemy) {
    enemy.x = this.background.width;
    var randomY = Phaser.Math.Between(0, this.background.height);
    enemy.y = randomY;
  }

}