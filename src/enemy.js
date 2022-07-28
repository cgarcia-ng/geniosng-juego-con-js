import Phaser from 'phaser';

export class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene) {

        const x = scene.background.width;
        const y = scene.background.height / 2;

        super(scene, x, y, 'enemy');
        scene.add.existing(this);

        this.play('chomper_anim');

    }
}
