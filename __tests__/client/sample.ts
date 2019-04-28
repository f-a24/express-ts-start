import sample from '../../src/client/scripts/sample';

describe('sample', () => {
  test('sample', () => {
    expect(sample()).toBe('Sample');
  });
});
