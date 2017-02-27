class InstructionLeft {
  constructor() {
    this.name = 'L';
  }

  getInstructionName() {
    return this.name;
  }

  execute = () => {

  }
}

export default new InstructionLeft();