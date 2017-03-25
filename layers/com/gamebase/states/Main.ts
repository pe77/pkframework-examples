/// <reference path='../../../vendor/pkframework/ts/pkframework.d.ts' />
/// <reference path='../../../vendor/phaser/ts/phaser.d.ts' />

module GameBase
{

	export class Main extends Pk.PkState {

		cursors:Phaser.CursorKeys;
		simon:Simon;

		speed:number = 3;

		init(...args:any[])
		{
			console.log('Main init', args);
		}

    	create()
    	{
    		console.log('Main create');
			
    		// create some elements
    		this.simon 		= new Simon(this.game, this.game.add.sprite(0, 0, 'simon'));
    		var stageBack 	= new Pk.PkElement(this.game);
			var stageFront 	= new Pk.PkElement(this.game);
			var pillars 	= new Pk.PkElement(this.game);

			// add layers
    		this.addLayer('stage-back');
    		this.addLayer('player');
    		this.addLayer('stage-front');

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
			// pressbutton is pressed
			if (this.cursors.left.isDown)
				this.simon.move(GameBase.SimonDirection.LEFT);
			//
			
			// right button is pressed
			if (this.cursors.right.isDown)
				this.simon.move(GameBase.SimonDirection.RIGHT);
			//

			// none is pressed | idle
			if (!this.cursors.right.isDown && !this.cursors.left.isDown)
				this.simon.idle();
			//
		}

		render()
		{
			this.game.debug.text('User arrows [left/right] to walk', 32, 32);
		}
    }

}