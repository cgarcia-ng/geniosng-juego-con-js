import Phaser from 'phaser';

export class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, image, anim) {

    super(scene, x, y, image);
    scene.add.existing(this);

    this.play(anim);

  }

  moveEnemy (speed) {
    this.x -= speed;
    if(this.x <= 0) {
      this.resetEnemyPosition();
    }
  }

  resetEnemyPosition () {
    this.x = this.scene.background.width;
    const randomY = Phaser.Math.Between(0, this.scene.background.height);
    this.y = randomY;
  }
}
