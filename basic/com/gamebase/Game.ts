/// <reference path='../../vendor/ts/pkframework.d.ts' />
/// <reference path='../../vendor/ts/phaser.d.ts' />

module GameBase {
 
    export class Game extends Pk.PkGame {
 
        constructor() {
            super(new Config()); 

            // add default state
            this.state.add('Menu', GameBase.Menu);
            this.state.add('Main', GameBase.Main);
        }
    }

    class Config extends Pk.PkConfig
    {

        constructor()
        {
            super();

            this.loaderState = Loader;
            this.initialState = 'Menu';

        }
    }
    
 
} 