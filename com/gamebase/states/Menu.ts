/// <reference path='../../pk/state/PkState.ts' />
/// <reference path='../../pk/state/PkTransition.ts' />

module GameBase
{

	export class Menu extends Pk.PkState {

		init(...args:any[])
		{
            super.init(args);
			console.log('Menu init');
		}

    	create()
    	{
            super.create();
    		console.log('Menu create');

            this.game.stage.backgroundColor = "#89aca6";

    		
    		setTimeout(()=>{
				// change pass params | any
                this.transition.change('Main', 'data string 1', 123456);
    		}, 1000);
    		
    	}
    }

}