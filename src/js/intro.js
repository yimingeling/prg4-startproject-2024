import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Scene, Keys } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Gull } from './playerGull.js'
import { Enemy } from './enemy.js'
import { Background, IntroFrame } from './background.js'


export class Intro extends Scene {
    constructor(game){
        super()
        this.game = game
    }

    onInitialize(engine) {
    
        console.log("intro")
    
        const backgroundIntro = new IntroFrame();
        this.add(backgroundIntro)

        this.game.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                console.log('pressed space')
                this.game.showLevel();
            }
        });
        

    }
    
}

