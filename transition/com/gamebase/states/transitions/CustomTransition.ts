/// <reference path='../../../../vendor/pkframework/ts/pkframework.d.ts' />

module GameBase
{
    export module CustomTransition
    {
        export class Alpha implements Pk.I.TransitionAnimation {

            public event:Pk.PkEvent = new Pk.PkEvent('CustomTransitionAlpha', this);
            public game:Pk.PkGame;

            public retangle:Phaser.Sprite;
            public changeTime:number = 500; // ms

            constructor(game:Pk.PkGame)
            {
                this.game = game;
            }

            start()
            { 
                // create a full screen black retangle alpha 0
                this.retangle = Pk.PkUtils.createSquare(this.game, this.game.camera.width, this.game.camera.height, "#000000")
                this.retangle.alpha = 0;

                // create a tween animation
                // tween samples: http://phaser.io/examples/v2/category/tweens
                var t = this.game.add.tween(this.retangle).to( { alpha: 1 }, this.changeTime, "Linear");
                t.onComplete.add(()=>{

                    // dispatch end transition | mandatory
                    this.event.dispatch(Pk.E.OnTransitionEndStart); 
                }, this);
                t.start(); // play tween
            }

            end()
            {
                // create a full screen black retangle alpha 1. Revert previous transition
                var retangle = Pk.PkUtils.createSquare(this.game, this.game.camera.width, this.game.camera.height, "#000000")

                // create a tween animation
                // tween samples: http://phaser.io/examples/v2/category/tweens
                var t = this.game.add.tween(retangle).to( { alpha: 0 }, this.changeTime, "Linear");
                t.onComplete.add(()=>{
                    // dispatch end transition | mandatory
                    this.event.dispatch(Pk.E.OnTransitionEndEnd); 
                }, this);
                t.start(); // play tween
            }
        }
    }
}
