/// <reference path='../../pk/state/PkState.ts' />
/// <reference path='../../pk/utils/PkUtils.ts' />

module GameBase
{

	export class Main extends Pk.PkState {

		init(...args:any[])
		{
			console.log('Main init', args);
		}

    	create()
    	{
    		this.game.stage.backgroundColor = "#eeeeee";

    		console.log('Main create');

    		// create two elements
    		var simon = new Pk.PkElement(this.game);
    		var square = new Pk.PkElement(this.game);

    		// action event test
    		simon.event.add('onAutoWhip', (event, param1, param2, param3)=>{
    			console.log('onAutoWhip reach! Params:', event, param1, param2, param3);
    		});

    		setTimeout(()=>{
    			simon.event.dispatch('onAutoWhip', 1, [1], 'one');
    		}, 1000);
    		

    		// add/create sprite
    		simon.add(this.game.add.sprite(0, 0, 'simon'));
    		square.add(Pk.PkUtils.createSquare(this.game, 45, 45, "#ff00ff"));


    		// add algumas layers
    		this.addLayer('stage-back');
    		this.addLayer('player');
    		this.addLayer('stage-front');

    		this.addToLayer('player', simon);
    		this.addToLayer('stage-back', square);
    	}
    }

}