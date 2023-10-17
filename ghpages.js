// you can see more info at https://github.com/tschaub/gh-pages
const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

const options = {
  dotfiles: true, // make .nojekyll be upload
  branch: 'gh-pages',
  repo: 'git@adc.github.trendmicro.com:Consumer-Frontend/consumer-tonic-ui.git' // project github repo
};

const callback = err => {

  if (err) console.error(err);
  else console.log('publish success');
};

// ref : https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages
fs.writeFileSync(path.resolve(__dirname, './astro/dist','.nojekyll'),'');

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(__dirname, './astro/dist'), options, callback);
