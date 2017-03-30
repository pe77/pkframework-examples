/// <reference path='../../../vendor/pkframework/ts/pkframework.d.ts' />
/// <reference path='transitions/CustomTransition.ts' />

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

            // when press the key...
            this.spaceBarKey.onDown.add(()=>{
                this.transition.change('Main'); // change to state Main
            }, this);

            // create a custom transition effect
            // states/transitions/CustomTransition.ts
            this.transition.transitionAnimation = new GameBase.CustomTransition.Alpha(this.game);
    	}

        render()
        {
            this.game.debug.text('Press [SPACEBAR] to enter', 35, 35);
        }
    }

}