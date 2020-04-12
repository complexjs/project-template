import { Script } from 'complex-scripting';

export default class MyScript extends Script {
    onSetup() {
        // here we can setup all required data like access another component
        //once the scriptcomponent is added to the entity
        this.myComponent = this.entity.getComponents(MyComponent)[0];
    }

    update() {
    }
}
