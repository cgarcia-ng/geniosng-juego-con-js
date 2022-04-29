import Phaser from 'phaser';
import backgroundImg from '../assets/backgrounds/background3.png'

export class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.add.text(20, 20, 'Game Loading...');
    this.load.image('bg', backgroundImg)

    setTimeout(() => {
      this.scene.start('playGame');
    }, 2000);
  }
}
