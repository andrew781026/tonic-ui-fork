const cssesc = require("cssesc");

// TODO : need more css Escape pattern
module.exports = {
  /**
   * Escape css.
   * @param {string} css
   * @returns {string} css
   */
  cssEscape: css => css.replaceAll('.','\\.'), // cssesc(css,{quotes:'single'}),
}
