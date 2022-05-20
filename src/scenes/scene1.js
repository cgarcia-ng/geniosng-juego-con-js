import Phaser from 'phaser';

import backgroundImg from '../assets/backgrounds/background3.png'
import enemyImg from '../assets/enemies/chomper.png'
import playerImg from '../assets/players/robot_blue.png'

export class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('bg', backgroundImg);

    // Loads enemy spritesheet
    this.load.spritesheet(
      'enemy',
      enemyImg,
      {
        frameWidth: 114,
        frameHeight: 114
      }
    );

    // Loads the player spritesheet
    this.load.spritesheet(
      'player',
      playerImg,
      {
        frameWidth: 114,
        frameHeight: 114
      }
    );

  }

  create() {
    // Add text to the scene
    this.add.text(20, 20, 'Game Loading...');

    // Add enemy animation
    this.anims.create({
      key: 'chomper_anim',
      frames: this.anims.generateFrameNames('enemy'),
      frameRate: 20,
      repeat: -1
    });

    // Add a timer to load next scene
    setTimeout(() => {
      this.scene.start('playGame');
    }, 2000);
  }
}
