"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssEscape = void 0;
// @ts-ignore
const escapeClassName_1 = __importDefault(require("tailwindcss/lib/util/escapeClassName"));
const cssEscape = (css) => {
    // # => throw Error
    /*
    Certainly, here is a simplified list of characters you should consider escaping in CSS selectors:
        # (hash) - for IDs
        . (dot) - for classes
        : (colon) - for pseudo-classes and pseudo-elements
        (space) - as a combinator or in values/classes/IDs
        > (greater than) - as a child combinator
        + (plus) - as an adjacent sibling combinator
        ~ (tilde) - as a general sibling combinator
        @ (at-sign) - for at-rules
        * (asterisk) - universal selector and in attribute selectors
        [] (square brackets) - for attribute selectors
        , (comma) - to separate multiple selectors or values
        () (parentheses) - for pseudo-classes and CSS functions like calc()
        ! (exclamation mark) - for !important
        ; (semicolon) - to terminate declarations
        {} (curly braces) - to enclose declarations
        " (double quotes) - in values
        ' (single quote) - in values
        \\ (backslash) - as the escape character itself
        $ (dollar sign) - typically used in SASS/SCSS (CSS preprocessors)
        || (double bar) - column combinator in CSS Grid
        In CSS, you escape these characters by placing a backslash \ before them. For example, to select an element with the ID id#with#hash, you would write #id\#with\#hash in your CSS
     */
    // return css.replaceAll('.', '\\.');
    return (0, escapeClassName_1.default)(css);
};
exports.cssEscape = cssEscape;
