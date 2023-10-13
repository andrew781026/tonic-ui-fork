const fs = require("fs");
const gen_consumer_design_tokens = require('./gen_consumer_design_tokens.json');

const data = gen_consumer_design_tokens
  .filter(obj => obj.type === 'COLOR')
  .reduce((pre, curr) => {

    let newItem = {}
    if (curr.color.startsWith('refId')) newItem[curr.colorName] = gen_consumer_design_tokens.find(item => item.id === curr.color.split('=')[1])?.color;
    else newItem[curr.colorName] = curr.color;

    return {
      ...pre,
      ...newItem
    };

  }, {});

fs.writeFileSync('gen_default_theme.json', JSON.stringify(data, null, 2));
