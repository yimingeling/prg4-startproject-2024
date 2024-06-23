import { Actor, Vector, CollisionType, CompositeCollider, Font, Color, SpriteSheet, range, Animation, Shape } from "excalibur";
import { Resources } from './resources'

export class Enemy extends Actor {
    
    constructor(pos) {
        super({
            anchor: new Vector(0, 0),
            width:Resources.Fish.width, height:Resources.Fish.height,
            pos: pos,
            collisionType: CollisionType.Passive

    
        });
    }
    onInitialize(engine) {

        const Enemy = new Actor()
        this.graphics.use(Resources.Fish.toSprite())
        this.rotation = 0.5
        this.angularVelocity= 1
        this.vel = new Vector(Math.random() * 300 - 150, Math.random() * 300 - 150);

        this.pos.x =  Math.random() * 800
        this.pos.y =  Math.random() * 600
        this.on("exitviewport", () => this.resetEnemy())

    }

    resetEnemy() {
        this.pos = new Vector(500, 100)
    }

    pickUp() {
        if (!this.isPickedUp) {
            this.isPickedUp = true;
            this.actions.fade(0, 200).die();

        }
    }

}