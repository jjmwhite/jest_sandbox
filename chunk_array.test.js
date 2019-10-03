const chunkArray = require('./chunk_array');

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('should chunk an array of any length', () => {
    expect(chunkArray([], 2)).toEqual([]);
    expect(chunkArray([1,2,3,4,5,6,7], 3)).toEqual([[1,2,3],[4,5,6,],[7]]);
});
