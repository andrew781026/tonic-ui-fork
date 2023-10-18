// you can see more info at https://github.com/tschaub/gh-pages
const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

const options = {
  branch: 'dist',
  repo: 'git@adc.github.trendmicro.com:Consumer-Frontend/consumer-tonic-ui.git' // project github repo
};

const callback = err => {

  if (err) console.error(err);
  else console.log('publish success');
};

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(__dirname, './dist'), options, callback);
