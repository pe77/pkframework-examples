/// <reference path='../../../vendor/pkframwork/ts/pkframework.d.ts' />

module GameBase
{
    export enum SimonDirection
    {
        LEFT,
        RIGHT
    }

	export class Simon extends Pk.PkElement {

        body:Phaser.Sprite;

        animationWalk:Phaser.Animation;

        speed:number = 4;

        constructor(game, body)
        {
            super(game);

            // set sprite as simon body
            this.body = body;
            this.add(this.body);

            // set pivot to middle | for flip sprite on middle
            this.body.pivot.x = this.body.width / 2;

            // add walk animation
            this.animationWalk = this.body.animations.add('walk');

            // start walking
            this.animationWalk.play(10, true);
        }

        move(direction:SimonDirection)
        {
            switch(direction)
            {
                case SimonDirection.LEFT:
                    this.body.x -= this.speed; // move
                    this.body.scale.x = -1; // flip
                    this.body.animations.play('walk'); // play animation
                    break;

                case SimonDirection.RIGHT:
                    this.body.x += this.speed; // move
                    this.body.scale.x = 1; // flip
                    this.body.animations.play('walk'); // play animation
                    break;
            }
        }

        idle()
        {
            this.body.animations.stop('walk', true); // stop walkin animation
        }

    }

}