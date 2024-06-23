import { CollisionType, Actor, Graphic, Engine, Loader, TestClock, DisplayMode, StrategyContainer, Scene, Camera, Label, Font, Color, Vector, Keys } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';


export class Floor extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Background.width - 60, height: Resources.Background.height - 40 });
    }
    
    onInitialize() {
        this.body.collisionType = CollisionType.Fixed;
        this.z = 10

    }
}