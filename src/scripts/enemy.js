import Phaser from 'phaser';

export class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, image, anim) {

        super(scene, x, y, image);
        scene.add.existing(this);

        this.play(anim);

    }
}

export const moveEnemy = (scene, enemy, speed) => {
    enemy.x -= speed;
    console.log(speed);
    if(enemy.x <= 0) {
      resetEnemyPosition(scene, enemy);
    }
  }

export const resetEnemyPosition = (scene, enemy) => {
  enemy.x = scene.background.width;
  const randomY = Phaser.Math.Between(0, scene.background.height);
  enemy.y = randomY;
}
