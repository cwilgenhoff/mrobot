import Interpreter from './interpreter';

class App {
  run = (filePath) => {
    const interpreter = new Interpreter(filePath);
    interpreter.parse();
  }
}

export default new App();
