import Phaser from 'phaser';

export class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    this.background = this.add.image(0, 0, 'bg')
    this.background.setOrigin(0, 0)

    this.add.text(20, 20, 'Playing Game...', {
      font: '25px Arial',
      color: 'yellow'
      })
  }
}