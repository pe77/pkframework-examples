/// <reference path='../../vendor/pkframwork/ts/pkframework.d.ts' />

module GameBase {
 
    export class Loader extends Pk.PkLoader implements Pk.I.Loader {

        init()
        {
            super.init();
        }

        preload()
        {
            super.preload();

            // default
            this.load.spritesheet('simon', 'assets/default/images/player.png', 58, 96, 5);

            // state level 1
            this.load.image('level1-bg', 'assets/states/level1/images/bg.png');
            this.load.audio('level1-sound', 'assets/states/level1/sounds/sound-test.mp3');
            
            // state menu
            this.load.image('menu-title', 'assets/states/main/images/titlepage.jpg');

            // state main
            this.load.image('main-sea', 'assets/states/main/images/sea.png');
            this.load.image('main-clouds', 'assets/states/main/images/clouds.png');
            this.load.image('main-sky', 'assets/states/main/images/sky.png');
            this.load.image('main-cave-bg', 'assets/states/main/images/cave-bg.png');
            this.load.image('main-cliff', 'assets/states/main/images/cliff.png');
            this.load.image('main-credit', 'assets/states/main/images/credits.png');
            this.load.image('main-tree', 'assets/states/main/images/tree.png');

            // state loader
            this.load.image('logo', 'assets/states/loader/images/logo.png');
        }

        create()
        {
            super.create();
        }
    }
 
}