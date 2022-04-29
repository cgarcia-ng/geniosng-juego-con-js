import Phaser from 'phaser';
// import playerImg from './assets/players/robot_blue.png'

import { Scene1 } from './scenes/scene1.js';
import { Scene2 } from './scenes/scene2.js';

/* class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.spritesheet('player', playerImg, { frameWidth: 114, frameHeight: 114 });
    }

    create ()
    {
        this.player = this.add.sprite(100, 320, 'player');
        this.keys = this.input.keyboard.createCursosrKeys();
    }

    update ()
    {
        if (this.keys.up.isDown)
        {
            this.player.y -= 4;
            this.player.setFrame(0);
        }
        else
        {
            this.player.y += 4;
            this.player.setFrame(1);
        }
    }
} */

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 960,
    height: 640,
    scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);
