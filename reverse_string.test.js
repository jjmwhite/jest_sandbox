const reverseStr = require('./reverse_string');

test('reverseStr function exists', () => {
    expect(reverseStr).toBeDefined();
});

test('string should return reversed', () => {
    expect(reverseStr('banana')).toEqual('ananab');
});