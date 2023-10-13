const fs = require('fs');
const consumer_design_tokens = require('./consumer_design_tokens.json');

const modeId = Object.keys(consumer_design_tokens.modes)[0];

const getColorName = name => {
  const nameSplit = name.split('/');
  const hasPalette = name.includes('palette');
  const paletteColor = nameSplit[4] ? `${nameSplit[0]}-${nameSplit[3]}-${nameSplit[4]}` : `${nameSplit[0]}-${nameSplit[3]}`;
  const systemColor = `${nameSplit[0]}-color-${nameSplit[3]}`
  return hasPalette ? paletteColor : systemColor ;
}

const data = consumer_design_tokens["variables"].map(obj => {

  if (obj.type === 'COLOR') {

    const values = obj.valuesByMode[modeId];
    return {
      id: obj.id,
      name: obj.name,
      type: obj.type,
      description: obj.description,
      colorName: getColorName(obj.name),
      color: values.type ? `refId=${values.id}` : `rgba(${Math.floor(values.r*255)},${Math.floor(values.g*255)},${Math.floor(values.b*255)},${values.a})`
    }
  } else if (obj.type === 'FLOAT') {

    const values = obj.valuesByMode[modeId];
    return {
      id: obj.id,
      name: obj.name,
      type: obj.type,
      description: obj.description,
      values
    }
  } else {
    return {
      id: obj.id,
      name: obj.name,
      type: obj.type,
      description: obj.description,
    }
  }
});

// console.log(JSON.stringify(data, null, 2));

fs.writeFileSync('gen_consumer_design_tokens.json', JSON.stringify(data, null, 2));
