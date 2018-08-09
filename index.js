const ts = require('tinyspeck');
const helpers = require('./helpers/normalize-port');
const argv = require('minimist')(process.argv.slice(2));
const port = helpers.normalizePort(argv['port'] || '3000');
const TOKEN = argv['token'];

const slack = ts.instance({token: TOKEN});

slack.on('/onboarding', data => {
  console.log(data);
  let message = {
    unfurl_links: true,
    channel: '#general',
    token: TOKEN,
    text: "I am a test message http://slack.com",
    attachments: [{
      text: "And here's an attachment!"
    }]
  }
  slack.send(message, data => {
    console.log('data message==', data);
  });
});

slack.listen(port);
