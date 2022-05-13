import Phaser from 'phaser';
import backgroundImg from '../assets/backgrounds/background3.png'
import enemyImg from '../assets/enemies/chomper.png'

export class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.add.text(20, 20, 'Game Loading...');
    this.load.image('bg', backgroundImg);

    this.load.spritesheet(
      'enemy',
      enemyImg,
      {
        frameWidth: 114,
        frameHeight: 114
      }
    );

    setTimeout(() => {
      this.scene.start('playGame');
    }, 2000);
  }
}
