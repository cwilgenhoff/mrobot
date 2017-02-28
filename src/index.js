import path from 'path';
import Interpreter from './interpreter';


const interpreter = new Interpreter(path.join(__dirname, '..', 'sample', 'data.txt'));

interpreter.parse();
