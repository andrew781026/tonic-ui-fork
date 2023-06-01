import {createButton} from './Button';

const getLabelForLocale = (locale) => {
  switch (locale) {
    case 'es':
      return 'Hola!';
    case 'fr':
      return 'Bonjour!';
    case 'kr':
      return '안녕하세요!';
    case 'zh':
      return '你好!';
    default:
      return 'Hello!';
  }
};

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({label, ...args}) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({label, ...args});
  },
  argTypes: {
    backgroundColor: {control: 'color'},
    label: {control: 'text'},
    onClick: {action: 'onClick'},
    primary: {control: 'boolean'},
    default: {control: 'boolean'},
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    backgrounds: {
      values: [
        {name: 'red', value: '#f00'},
        {name: 'green', value: '#0f0'},
        {name: 'blue', value: '#00f'},
      ],
    },
  },
  name: 'Primary',
  render: (args, {globals: {locale}}) => createButton({...args, label: getLabelForLocale(locale)}),
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    default: true,
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    default: true,
    size: 'small',
    label: 'Button',
  },
};
