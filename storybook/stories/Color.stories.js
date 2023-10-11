import {createTypology} from './Typology';

const getLabelForLocale = (locale) => {
  switch (locale) {
    case 'jp':
      return '類型学';
    case 'fr':
      return 'typologie';
    case 'kr':
      return '유형학';
    case 'zh':
      return '類型學';
    default:
      return 'Typology';
  }
};

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Example/Typology',
  tags: ['autodocs'],
  render: ({label, ...args}) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createTypology({label, ...args});
  },
  argTypes: {
    label: {control: 'text'},
    color: {action: 'text'},
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Red = {
  args: {
    label: 'Typology',
    color: 'red-10',
  },
  name: 'Red',
  render: (args, {globals: {locale}}) => createTypology({...args, label: getLabelForLocale(locale)}),
};
