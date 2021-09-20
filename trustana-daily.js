var axios = require('axios');
var data = require('./dailyData.json');

data.sections[0].activityTitle = 'Mọi người gửi report ngày hôm nay nhé '  + new Date().toLocaleDateString('en-GB') + ' !!!';
data.sections[0].activitySubtitle = "On Project Trustana - Auto send";

var config = {
  method: 'post',
  url: 'https://sgcmccomvn.webhook.office.com/webhookb2/de0b4e51-8270-4a0d-88ef-dfe91f2d05cc@2f173612-6f45-4520-9df8-32d7ba5f2c44/IncomingWebhook/a6c54d75c04e443eac5cc4700fc45fa1/4102a2af-2d8f-4421-8022-ef32fe2e7e82',
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

