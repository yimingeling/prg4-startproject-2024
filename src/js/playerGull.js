import { Actor, Vector, Keys, CollisionType, SpriteSheet, Animation, range, CompositeCollider, Shape } from "excalibur";
import { ResourceLoader, Resources } from './resources.js';
import { Enemy } from './enemy.js';


export class Gull extends Actor {


    constructor(game) {
        super({ width: 100, height: 100 })
        this.body.collisionType = CollisionType.Active
        this.game = game;
        this.score = 0

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Seagull.toSprite());
        this.pos = new Vector(300, 600);
        this.vel = new Vector(0, 0);
        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on('collisionstart', (event) => this.hitSomething(event))

        

        this.headwear= new Actor()
        this.headwear.graphics.use(Resources.Hat.toSprite())
        this.headwear.pos= new Vector(0,-130)
        this.headwear.scale= new Vector(0.5, 0.5)
        this.addChild(this.headwear)


        this.engine = engine
        this.body.mass = 1    



    }

    hitSomething(event) {
        if (event.other instanceof Enemy) {
            event.other.kill()
            Resources.LevelStart.play()
            console.log("picked up a coin");
            this.score += 10;
            event.other.pickUp(this);
            console.log(this.score);
            
      }
    }

    onPostKill() {
        console.log("car was removed")
    }

    resetCar() {
        this.pos = new Vector(500, 100)
    }

    onPostUpdate() {
        if (this.pos.x < 100) {
            console.log("de auto is links")
        }
    }

    onPreUpdate(engine) {


        if (engine.input.keyboard.isHeld(Keys.D)) {
            this.vel = (new Vector(300, 0))
        }
    
        if (engine.input.keyboard.isHeld(Keys.A)) {
            this.vel = (new Vector(-300, 0))
        }
    
        if (this.grounded) {
            if (engine.input.keyboard.wasPressed(Keys.Space)) {
                this.body.applyLinearImpulse(new Vector(0, -250))
                this.grounded = false           // grounded weer op true zetten na collision met ground
        
            }
        }
 

        
        this.graphics.flipHorizontal = (this.vel.x > 0)

        
    }
    
    
}