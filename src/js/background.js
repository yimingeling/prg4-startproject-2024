import { Actor, Graphic, Engine, Loader, TestClock, DisplayMode, StrategyContainer, Scene, Camera, Label, Font, Color, Vector, Keys } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';


export class Background extends Actor {
    constructor() {
        super()
    }
    onInitialize() {
        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(400, 350)
        this.scale = new Vector(0.3, 0.3)
    }
}

export class IntroFrame extends Actor {
    constructor() {
        super()
    }
    onInitialize() {
        this.graphics.use(Resources.IntroScreen.toSprite())
        this.pos = new Vector(400, 350)
        this.scale = new Vector(0.3, 0.3)
        
    }
}







