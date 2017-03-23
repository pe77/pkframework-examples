/// <reference path='../../../vendor/ts/pkframework.d.ts' />

module GameBase
{

	export class Menu extends Pk.PkState {

        spaceBarKey:Phaser.Key;

		
        init(param1, param2, param3) // or | init(...args:any[]) |
		{
            super.init(); // if whant override init, you need this line!
			console.log('Menu init');

            console.log('params:', param1, param2, param3);
		}

    	create()
    	{
            super.create();
    		console.log('Menu create');

            // change state bg
            this.game.stage.backgroundColor = "#89aca6";

    		// get the keyboard
            this.spaceBarKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    		
    	}

        update()
        {
            // when press the key...
            if (this.spaceBarKey.isDown)
                this.transition.change('Main');  // change to main state (somenthing like game first stage or options state)
            //
        }

        render()
        {
            this.game.debug.text('Press [SPACEBAR] to enter', 35, 35);
        }
    }

}