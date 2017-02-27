import Forward from './forward';
import Left from './left';
import Right from './right';

export const combineInstructions = (list) => {
  return list.reduce((instructions, instruction) => {
    instructions[instruction.getInstructionName()] = instruction;
    return instructions;
  }, {})
};

export const configureInstructions = () => {
  return combineInstructions([
    Forward,
    Left,
    Right
  ]);
};
