import chai from 'chai';
chai.should();

import InstructionForward from '../../src/instructions/forward';

describe('InstructionForward', () => {
  it('should exist', () => {
    InstructionForward.should.exist;
  });

  it('should have ID=F', () => {
    InstructionForward.id.should.equal('F');
  });

  it('should execute', () => {
  });
});
