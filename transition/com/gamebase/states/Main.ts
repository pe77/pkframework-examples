/// <reference path='../../../vendor/pkframework/ts/pkframework.d.ts' />

module GameBase
{

	export class Main extends Pk.PkState {

		enterKey:Phaser.Key;

		init(...args:any[])
		{
			super.init(args); // if whant override init, you need this line!
			console.log('Main init', args);
		}

    	create()
    	{
    		console.log('Main create');
			
    		// change state bg
            this.game.stage.backgroundColor = "#938da0";

    		// get the keyboard key to come back to menu
            this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

			// when press the key...
            this.enterKey.onDown.add(()=>{
                this.transition.change('Menu', 1111, 'text', {a:true, b:[1, 2]});  // return with some foo/bar args
            }, this);

			// create a custom transition effect
			// states/transitions/CustomTransition.ts
            this.transition.transitionAnimation = new GameBase.CustomTransition.Alpha(this.game);
    	}

		render()
		{
			this.game.debug.text('Press [ENTER] to back to Menu', 35, 35);
		}

    }

}