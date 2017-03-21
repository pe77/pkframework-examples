/// <reference path='../../../../com/pk/state/PkState.ts' />
/// <reference path='../../../../com/pk/utils/PkUtils.ts' />

module GameBase
{

	export class Main extends Pk.PkState {

		cursors:Phaser.CursorKeys;
		simon:Pk.PkElement;

		speed:number = 3;

		init(...args:any[])
		{
			console.log('Main init', args);
		}

    	create()
    	{
    		console.log('Main create');
			
    		// create some elements
    		this.simon 		= new Pk.PkElement(this.game);
    		var stageBack 	= new Pk.PkElement(this.game);
			var stageFront 	= new Pk.PkElement(this.game);
			var pillars 	= new Pk.PkElement(this.game);

			this.simon.enableBody = true;

			// add layers
    		this.addLayer('stage-back');
    		this.addLayer('player');
    		this.addLayer('stage-front');

    		// event listener
    		this.simon.event.add('onAutoWhip', (event, param1, param2, param3)=>{
    			console.log('onAutoWhip reach! Params:', event, param1, param2, param3);
    		});

			// dispatch event test 
    		setTimeout(()=>{
				// dispatch event
    			this.simon.event.dispatch('onAutoWhip', 1, [1], 'one');
    		}, 1000);
    		
    		// create sprites ... and add to element
    		this.simon.add(this.game.add.sprite(0, 0, 'simon')); // player

			// bg half size of world
    		stageBack.add(Pk.PkUtils.createSquare(this.game, this.game.world.width, this.game.world.height/2, "#775577")); // stage bg (same size of world)
			stageBack.y = this.game.world.centerY;

			// create some pillars across the screen
			var pillarsTotal = 5;
			for (var i = 0; i < pillarsTotal; i++) {
				var pillarSprite = Pk.PkUtils.createSquare(this.game, 40, this.game.world.height, "#000");
				pillarSprite.x =  (this.game.world.width / pillarsTotal) * i;
				pillars.add(pillarSprite);
			}

    		this.addToLayer('player', this.simon);
    		this.addToLayer('stage-back', stageBack);
			this.addToLayer('stage-front', pillars);

			// put little simon on edge of screen and middle
			this.simon.y = this.game.world.height - this.simon.height;
			this.simon.x = this.game.world.centerX; // almost (not anchor /2 sprite size... but ok anyway)
			
			// add some interaction
			this.cursors = this.game.input.keyboard.createCursorKeys();
    	}

		update()
		{
			if (this.cursors.left.isDown)
				this.simon.x -= this.speed; // moon walk
			//
			
			if (this.cursors.right.isDown)
				this.simon.x += this.speed;
			//
		}

		render()
		{
			this.game.debug.text('User arrows [left/right] to walk', 32, 32);
		}
    }

}