import Phaser from 'phaser';

import { Enemy, moveEnemy, resetEnemyPosition } from '../scripts/enemy.js';
import { spawnEnemy } from '../scripts/utils.js';

export class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    this.background = this.add.tileSprite(0, 0, this.width, this.height, 'bg');
    this.background.setOrigin(0, 0);

    const width = this.background.width;
    const height = this.background.height;

    // Add font to the scene
    this.gameOverText = this.add.bitmapText(
      width / 2,
      height / 2,
      'font',
      'Game Over\nClick here to Start Again'
    );

    this.gameOverText.visible = true;
    this.gameOverText.setCenterAlign();
    this.gameOverText.setOrigin(0.5, 0.5);
    this.gameOverText.setFontSize(40);

    // Add enemy to the scene
    this.enemy1 = spawnEnemy(this, 'enemy1', 'anim1');
    this.enemy2 = spawnEnemy(this, 'enemy2', 'anim2');
    this.enemy3 = spawnEnemy(this, 'enemy3', 'anim3');

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

    this.enemySpeed1 = Phaser.Math.Between(4, 10);
    this.enemySpeed2 = Phaser.Math.Between(4, 10);
    this.enemySpeed3 = Phaser.Math.Between(4, 10);

  }

  update() {
    this.background.tilePositionX += 1;
    this.enemy1.moveEnemy(this.enemySpeed1);
    this.enemy2.moveEnemy(this.enemySpeed2);
    this.enemy3.moveEnemy(this.enemySpeed3);
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

  hurtPlayer(player, enemy) {
    enemy.resetEnemyPosition();
    player.x = 100;
    player.y = 300;
  }

}