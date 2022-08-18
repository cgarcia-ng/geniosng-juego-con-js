import Phaser from 'phaser';

import backgroundImg from '../assets/backgrounds/background3.png';
import batImg from '../assets/enemies/bat.png';
import chomperImg from '../assets/enemies/chomper.png';
import playerImg from '../assets/players/robot_blue.png';
import zombieImg from '../assets/enemies/zombie.png';
import fontTexture from '../assets/fonts/font5.png';
import fontDataXml from '../assets/fonts/font5.xml';

export class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('bg', backgroundImg);
    this.load.bitmapFont('font', fontTexture, fontDataXml);

    // Loads enemy spritesheet
    this.load.spritesheet(
      'enemy1',
      chomperImg,
      {
        frameWidth: 114,
        frameHeight: 114
      }
    );

    this.load.spritesheet(
      'enemy2',
      batImg,
      {
        frameWidth: 114,
        frameHeight: 114
      }
    );

    this.load.spritesheet(
      'enemy3',
      zombieImg,
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
      key: 'anim1',
      frames: this.anims.generateFrameNames('enemy1'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'anim2',
      frames: this.anims.generateFrameNames('enemy2'),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'anim3',
      frames: this.anims.generateFrameNames('enemy3'),
      frameRate: 20,
      repeat: -1
    });

    // Add a timer to load next scene
    setTimeout(() => {
      this.scene.start('playGame');
    }, 2000);
  }
}
