class Dataflow {
  constructor() {
    this.scene = {
      root: { name: 'Root Node' }
    };
  }

  scenegraph() {
    return this.scene;
  }
}

class Context {
  constructor() {
    this.dataflow = new Dataflow();
  }
}

class MyApp {
  constructor() {
    this.context = new Context();
  }

  setScene(group) {
    const scene = group || this.context.dataflow.scenegraph().root;
    console.log(scene);
  }
}

const app = new MyApp();
const someGroup = { name: 'Some Group' };

// Using the group
app.setScene(someGroup); // Output: { name: 'Some Group' }

// Using the default root node
app.setScene(null); // Output: { name: 'Root Node' }
