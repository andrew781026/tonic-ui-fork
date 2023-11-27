import parser from 'postcss-selector-parser'

// ref : https://github.com/postcss/postcss-selector-parser/blob/master/API.md
describe('css', () => {

  describe('escape css', () => {
    it('idp extension config', () => {
      const css01 = '2.5xl';
      const result = parser.className({value: css01});
      console.log(result);
    })
  })
})
