// you can see more info at https://github.com/tschaub/gh-pages
const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');
const copyFile = require('./utils/copyFile');

console.log('process.env.GITHUB_TOKEN=', process.env.GITHUB_TOKEN);

const repo = process.env.GITHUB_TOKEN
  ? `https://${process.env.GITHUB_TOKEN}@adc.github.trendmicro.com/Consumer-Frontend/consumer-tonic-ui.git`
  : 'git@adc.github.trendmicro.com:Consumer-Frontend/consumer-tonic-ui.git';

const options = {
  branch: 'dist',
  repo // project github repo
};

const callback = err => {

  if (err) {
    console.error(err);
    process.exit(1); // exit node process with 'failure' code
  } else console.log('publish success');
};

// for dist using
copyFile(path.resolve(__dirname, 'dist-package.json'), path.resolve(__dirname, 'dist', 'package.json'));

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(__dirname, './dist'), options, callback);
