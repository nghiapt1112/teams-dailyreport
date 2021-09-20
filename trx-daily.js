var axios = require('axios');
var data = require('./dailyData.json');

const hostURL = 'https://sgcmccomvn.webhook.office.com/webhookb2/b8598fad-5b8d-477b-99d2-5a4844bd7daf@2f173612-6f45-4520-9df8-32d7ba5f2c44/IncomingWebhook/f8bdad328f464227b0daedae588e0689/4102a2af-2d8f-4421-8022-ef32fe2e7e82';

data.sections[0].activityTitle = 'Mọi người gửi report ngày hôm nay nhé '  + new Date().toLocaleDateString('en-GB') + ' !!!';
data.sections[0].activitySubtitle = "On Project Y3_TRX - Auto send";


const config = {
  method: 'post',
  // url: hostURL,
  url: 'https://sgcmccomvn.webhook.office.com/webhookb2/0eeb1f18-1d5c-4ecf-8ea0-b6b7216a381d@2f173612-6f45-4520-9df8-32d7ba5f2c44/IncomingWebhook/669569c1daf642e4963649996aa6fca3/4102a2af-2d8f-4421-8022-ef32fe2e7e82',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

