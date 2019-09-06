import { Complex, Scene } from 'complex-engine';

class MyScene extends Scene {
    constructor() {
        super('MyScene');
    }

    load() {
        // Setup your environment here
        // add entities, systems and managers to the this.world instance
    }
}

Complex
    .getInstance()
    .loadScene(new MyScene());

function animate() {
    Complex.getInstance().update();
    requestAnimationFrame(animate);
}

animate();

