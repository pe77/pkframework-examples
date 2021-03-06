/// <reference path='../../vendor/phaser/ts/phaser.d.ts' />
/// <reference path='../../vendor/pkframwork/ts/pkframework.d.ts' />

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