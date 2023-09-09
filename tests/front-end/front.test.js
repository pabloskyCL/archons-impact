const { palindrome } = require('../../utils/front');

test('palindrome of pabloskyCL', () => {
    const result = palindrome('pabloskyCL');
    expect(result).toBe('LCyksolbap');
});

