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
                this.transition.change('Main', 'foi', 77);
    		}, 1000);
    		
    	}
    }

}