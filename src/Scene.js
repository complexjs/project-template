import { Scene } from 'complex-engine';
import RenderSystem from './RenderSystem';
import { ScriptComponent, ScriptSystem } from 'complex-scripting';

export default class MyScene extends Scene {
    constructor() {
        super('MyScene');
    }

    load() {
        // Setup your environment here
        // add entities, systems and managers to the this.world instance

        this.world.addEntitySystem(new RenderSystem());

        this.world.createEntity([
            new ScriptComponent(new MyScript()),
        ]);
    }
}
