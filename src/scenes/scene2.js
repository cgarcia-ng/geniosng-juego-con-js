import Phaser from 'phaser';

import { Enemy, moveEnemy } from '../enemy.js';

export class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    this.background = this.add.tileSprite(0, 0, this.width, this.height, 'bg');
    this.background.setOrigin(0, 0);

    // Add enemy to the scene
    const width = this.background.width;
    const height = this.background.height;

    this.enemy1 = new Enemy(
      this,
      width + Phaser.Math.Between(0, 500),
      Phaser.Math.Between(0, height),
      'enemy1',
      'anim1'
    );

    this.enemy2 = new Enemy(this, width + Phaser.Math.Between(0, 500), Phaser.Math.Between(0, height), 'enemy2', 'anim2');
    this.enemy3 = new Enemy(this, width + Phaser.Math.Between(0, 500), Phaser.Math.Between(0, height), 'enemy3', 'anim3');

    // Add player to scene
    this.player = this.physics.add.sprite(100, 300, 'player');
    this.player.setCollideWorldBounds(true);

    // Map keyboard keys
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.add.text(20, 20, 'Playing Game...', {
      font: '25px Arial',
      color: 'yellow'
    });

    this.enemies = this.physics.add.group();
    this.enemies.add(this.enemy1);
    this.enemies.add(this.enemy2);
    this.enemies.add(this.enemy3);

    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);

  }

  update() {
    this.background.tilePositionX += 1;
    moveEnemy(this, this.enemy1, Phaser.Math.Between(4, 10));
    moveEnemy(this, this.enemy2, Phaser.Math.Between(4, 10));
    moveEnemy(this, this.enemy3, Phaser.Math.Between(4, 10));
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

  resetEnemyPosition(enemy) {
    enemy.x = this.background.width;
    var randomY = Phaser.Math.Between(0, this.background.height);
    enemy.y = randomY;
  }

  hurtPlayer(player, enemy) {
    this.resetEnemyPosition(enemy);
    player.x = 100;
    player.y = 300;
  }

}