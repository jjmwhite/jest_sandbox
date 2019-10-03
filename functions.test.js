const functions = require('./functions');

// You can set the #Each and #All functions within a describe block to affect testing scope
const initDB = () => console.log('Database initialized...');
const closeDB = () => console.log('Database closed...');
const startTask = () => console.log('Starting new task');
const endTask = () => console.log('Ending task');

// NB: In the test below, the #All test only within the describe block (weird, right?)
beforeAll(() => initDB());
afterAll(() => closeDB());

describe('it should perform tasks between each test', () => {
    beforeEach(() => startTask());
    afterEach(() => endTask());
    
    test('adds two numbers', () => {
        expect(functions.add(2,3)).toBe(5);
        expect(functions.add(-1,1)).toBe(0);
    });
    
    test('divides two numbers', () => {
        expect(functions.divide(4,2)).toBe(2);
    });
});

// can use test() or it() descriptive syntax
test('User should have a first and last name', () => {
    const user = functions.createUser();
    expect(user.firstName).not.toBeFalsy;
    expect(user.lastName).not.toBeFalsy;
});

test('User test name should be Ervin Howell', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then( data => { expect(data.name).toEqual('Ervin Howell') });
});
