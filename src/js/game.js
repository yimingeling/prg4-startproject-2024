import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Intro } from './intro.js'
import { Level } from './level.js'



const options = {
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 1800),
    }
}

export class Game extends Engine {

    

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen

         })
        this.start(ResourceLoader).then(() => this.showIntro())


        this.score = 0; 
    }


    showIntro() {
        const intro = new Intro(this);
        this.addScene('introScene', intro)
        this.goToScene('introScene')    
    }

    showLevel() {
        const level = new Level(this);
        this.addScene('levelScene', level)
        this.goToScene('levelScene')    
    }
    
    incrementScore() {
        this.score++;
    }

    getScore() {
        return this.score;
    }

}   

new Game()
