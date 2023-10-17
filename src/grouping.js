const fs = require("fs");
const gen_consumer_design_tokens = require('./gen_consumer_design_tokens.json');
const colors = require("./gen_default_theme.json");

const data = gen_consumer_design_tokens
  .filter(obj => obj.type === 'COLOR')
  .map(obj => {
    // replace refId to color
    let newColor = null;
    if (obj.color.startsWith('refId')) newColor = gen_consumer_design_tokens.find(item => item.id === obj.color.split('=')[1])?.color;
    else newColor = obj.color;

    return {...obj, color: newColor}
  });

let result = {other: []}

data.forEach(obj => {

  if (obj.group && result[obj.group]) result[obj.group].push(obj);
  else if (obj.group && !result[obj.group]) result[obj.group] = [obj];
  else result.other.push(obj);
});

// const sorted = result.sort((a, b) => (a.order > b.order) ? 1 : -1);
Object.entries(result).map(([key, value]) => value.sort((a, b) => (parseInt(a.order) > parseInt(b.order)) ? -1 : 1));

fs.writeFileSync('grouped_design_token.json', JSON.stringify(result, null, 2));
