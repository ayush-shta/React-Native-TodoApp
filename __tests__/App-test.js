/**
 * @format
 */

import 'react-native';

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});