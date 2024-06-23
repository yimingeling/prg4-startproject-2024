import '../css/style.css'
import { Engine, Loader, TestClock, DisplayMode, StrategyContainer, Scene, Camera, Label, Font, Color, Vector, Keys, BoundingBox } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'
import { Gull } from './playerGull.js'
import { Enemy } from './enemy.js'
import { Background } from './background.js'
import { Floor } from './floor.js'


export class Level extends Scene {
    
    constructor(game) {
        super()
        this.game = game

    }
    onInitialize(engine) {

        console.log("level")
        
        const background = new Background();
        this.add(background)

       













        const gull = new Gull()
        this.add(gull)

         this.camera.strategy.lockToActor(gull)
         this.camera.zoom = 1;
         this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2280, 720));

         
        for (let i = 0; i < 10; i++) {

            const enemy = new Enemy()
            this.add(enemy)


        }
    }
    
}

