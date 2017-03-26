/// <reference path='../../../vendor/phaser/ts/phaser.d.ts' />
/// <reference path='../../../vendor/pkframwork/ts/pkframework.d.ts' />

module GameBase
{

	export class Main extends Pk.PkState {

		cursors:Phaser.CursorKeys;
		simon:Simon;
		parallax:Pk.PkParallax;

		tilesprite:Phaser.TileSprite;

		width:number;
		height:number;

		init(...args:any[])
		{
			super.init(args);

			console.log('Main init', args);

			this.width 	= 1920;
			this.height = this.game.world.height;
		}

    	create()
    	{
			console.log('Main create');

			this.game.world.setBounds(0, 0, this.width, this.height);

			this.game.stage.backgroundColor = "#a1f2ec";
			
    		// create some elements
    		this.simon 		= new Simon(this.game, this.game.add.sprite(0, 0, 'simon'));

			// camera follow little simon
			this.pkGame.camera.follow(this.simon.body);

			// add layers
			this.addLayer('stage-back');
			this.addLayer('cave-back');
			this.addLayer('platform-back');
    		this.addLayer('player');
			this.addLayer('platform');
			this.addLayer('ui');

			// add parallax controller
			this.parallax = new Pk.PkParallax(this);

			// add river
			var sea = this.game.add.tileSprite(0, 510, this.game.width, 96, 'main-sea');
			this.parallax.add(sea, 2); // [object, distance]

			// add sky
			var sky = this.game.add.tileSprite(0, 160, this.game.width, 304, 'main-sky');
			sky.fixedToCamera = true; // fixed bg, dont need parallax

			// add clouds
			var clouds = this.game.add.tileSprite(0, 280, this.game.width, 236, 'main-clouds');
			this.parallax.add(clouds, 20); // [object, distance]

			// add cliff
			var cliff = this.game.add.sprite(0, 430, 'main-cliff');

			// cave back
			var caveBg = this.game.add.sprite(0, 0, 'main-cave-bg');
			caveBg.x = this.world.width - caveBg.width; // end of world

			// sprites credits
			var credits = this.game.add.sprite(0, 0, 'main-credit');
			credits.x = this.world.width - credits.width; // end of world

			// little tree
			var tree = this.game.add.sprite(950, 340, 'main-tree');

			// use tree like a bush
			var bush = this.game.add.sprite(50, 400, 'main-tree');

    		this.addToLayer('player', this.simon);
			this.addToLayer('stage-back', sky);
			this.addToLayer('stage-back', clouds);
			this.addToLayer('cave-back', caveBg);
			this.addToLayer('stage-back', sea);
			this.addToLayer('platform', cliff);
			this.addToLayer('ui', credits);
			this.addToLayer('platform-back', tree);
			this.addToLayer('platform-back', bush);

			// put little simon on edge of screen and middle
			this.simon.y = 455 - this.simon.height;
			this.simon.x = 30;
			
			// add some interaction
			this.cursors = this.game.input.keyboard.createCursorKeys();

    	}

		update()
		{
			// update parallax
			this.parallax.update();

			// left button is pressed
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