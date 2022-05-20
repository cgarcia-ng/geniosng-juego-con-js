import Phaser from 'phaser';

import { Scene1 } from './scenes/scene1.js';
import { Scene2 } from './scenes/scene2.js';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 960,
    height: 640,
    scene: [Scene1, Scene2],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
