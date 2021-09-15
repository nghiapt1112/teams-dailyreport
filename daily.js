var axios = require('axios');
var data = JSON.stringify({
  "@type": "MessageCard",
  "@context": "http://schema.org/extensions",
  "themeColor": "0076D7",
  "summary": "...",
  "sections": [
    {
      "activityTitle": "Mọi người gửi report ngày hôm nay nhé " + new Date().toLocaleDateString('en-GB') + " !!!",
      "activitySubtitle": "On Project Trames - Auto send",
      "activityImage": "https://en.gravatar.com/userimage/180126290/6c0a05a131ad0c17b4bbf43a5c3c74ea.png",
      "facts": [
        {
          "name": "Assigned to",
          "value": "Trames 's members"
        },
        {
          "name": "Status",
          "value": "Started"
        },
        {
          "name": "Note",
          "value": "1. Mọi người phải logwork.\n2. Các tasks phải điền các fields Date.\n3. Report đầy đủ thông tin cần thiết."
        },
        {
          "name": "Format",
          "value": "| Task------------------|-------Issues---------------------|----------Plan----------\n|----------|:-------------:|------:|\n| #DMS-123 -----|---- User không thể login ----- | Ngày 01-01-2021 sẽ hoàn thành hết các task từ #123-#456 |"
        }
      ],
      "markdown": true
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://sgcmccomvn.webhook.office.com/webhookb2/0eeb1f18-1d5c-4ecf-8ea0-b6b7216a381d@2f173612-6f45-4520-9df8-32d7ba5f2c44/IncomingWebhook/1c81f291941244f2b7c44c9e6a8e8767/4102a2af-2d8f-4421-8022-ef32fe2e7e82',
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

