const functions = require('./functions');

const initDB = () => console.log('database initialized...');
const closeDB = () => console.log('database closed...');
const startTask = () => console.log('Starting new task');
const endTask = () => console.log('Ending task');

beforeAll(() => initDB());
afterAll(() => closeDB());

beforeEach(() => startTask());
afterEach(() => endTask());

test('adds two numbers', () => {
    expect(functions.add(2,3)).toBe(5);
    expect(functions.add(-1,1)).toBe(0);
});

test('divides two numbers', () => {
    expect(functions.divide(4,2)).toBe(2);
});

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

