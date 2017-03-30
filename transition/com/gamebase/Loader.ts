/// <reference path='../../vendor/pkframework/ts/pkframework.d.ts' />

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
            
            // state main
            this.load.image('titlepage', 'assets/states/main/images/titlepage.jpg');

            // state loader
            this.load.image('loadingbar', 'assets/states/loader/images/loader.png');
            this.load.image('logo', 'assets/states/loader/images/logo.png');
        }

        create()
        {
            super.create();
        }
    }
 
}