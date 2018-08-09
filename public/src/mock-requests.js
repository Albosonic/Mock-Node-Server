let json = {
  "token": "Jhj5dZrVaK7ZwHHjRyZWjbDl",
  "challenge": "3eZbrw1aBm2rZgRNFdxV2595E9CY3gmdALWMmHkvFXO7tYXAYM8P",
  "type": "url_verification"
};

json = JSON.stringify(json);

function kickSlackBot(callback, userInput) {
  $.ajax({
    url: '/slackbot',
    type: 'post',
    contentType:'application/json',
    data: json,
    success: function(res) {
      console.log('res====', res);
    }
  });
}

kickSlackBot();