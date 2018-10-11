const Atrium = require('mx-atrium');
const AtriumClient = new Atrium.Client("YOUR_MX_API_KEY", "YOUR_MX_CLIENT_ID", "https://vestibule.mx.com/");

var request = {
  body: {
    "transactions": [
      {
        "amount": 11.22,
        "description": "BEER BAR 65000000764SALT LAKE C",
        "id": "12",
        "type": "DEBIT"
      },
      {
        "amount": 21.33,
        "description": "IN-N-OUT BURGER #239AMERICAN FO",
        "id": "13",
        "type": "DEBIT"
      },
      {
        "amount": 1595.33,
        "description": "ONLINE PAYMENT - THANK YOU",
        "id": "14",
        "type": "CREDIT"
      }
    ]
  }
};

AtriumClient.categorizeAndDescribeTransactions(request)
  .then(function(response) {
    console.log("\n************************** List Institutions **************************")
    console.log(response)
  });
