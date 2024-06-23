import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Gull } from './playerGull.js'
import { Enemy } from './enemy.js'
import { Background, IntroFrame } from './background.js'


export class gameOver extends Scene {
    constructor(game){
        super()
        this.game = game
    }

    onInitialize(engine) {
    
        console.log("end")
    
        const backgroundIntro = new IntroFrame();
        this.add(backgroundIntro)


        

    }
    
}

