import { configureInstructions } from './instructions/index';

global.instructions = configureInstructions();

console.log(global.instructions);
