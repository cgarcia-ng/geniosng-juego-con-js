import Phaser from 'phaser';
import { Enemy } from './enemy.js';

export const spawnEnemy = (scene, image, anim) => {
  const x = scene.background.width + Phaser.Math.Between(0, 500);
  const y = Phaser.Math.Between(0, scene.background.height);
  return new Enemy(scene, x, y, image, anim);
}
