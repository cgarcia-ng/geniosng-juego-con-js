import Phaser from 'phaser';

export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'player');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
  }

  // Helper functions
  // movePlayerManager(scene) {
  //   if (scene.cursorKeys.up.isDown) {
  //     scene.player.y -= 4;
  //     scene.player.setFrame(0);
  //   } else {
  //     scene.player.y += 4;
  //     scene.player.setFrame(1);
  //   }
  // }

  // hurtPlayer() {
  //   // console.log(this);
  //   this.escene.enemy.resetEnemyPosition();
  //   this.x = 100;
  //   this.y = 300;
  // }
}
