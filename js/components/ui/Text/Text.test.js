import {Text} from "./Text.js";

describe('Text:', () => {
  it('Unit test 1', () => {
    const htmlString = Text('', '');
    const isString = typeof htmlString === 'string';
    expect(isString).toEqual(true);
  })
})