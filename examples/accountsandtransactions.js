const Atrium = require('mx-atrium');
const AtriumClient = new Atrium.Client("YOUR_MX_API_KEY", "YOUR_MX_CLIENT_ID", "https://vestibule.mx.com/");

var userGUID;
var memberGUID;
var accounts;
var transactions;

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

console.log("\n* Creating test user and member *");

var request = {
  body: {
    "user": {
      "metadata": "{\"first_name\": \"Steven\"}"
    }
  }
};

AtriumClient.createUser(request)
  .then(function(data) {
    console.log("Created user: " + data.user.guid)

    userGUID = data.user.guid
  })
  .then(function(data) {
    var request = {
      params: {
        userGuid: userGUID
      },
      body: {
        "member": {
          "institution_code": "mxbank",
          "credentials": [{
              "guid": "CRD-9f61fb4c-912c-bd1e-b175-ccc7f0275cc1",
              "value": "test_atrium"
            },
            {
              "guid": "CRD-e3d7ea81-aac7-05e9-fbdd-4b493c6e474d",
              "value": "password"
            }
          ]
        }
      }
    }

    AtriumClient.createMember(request)
      .then(function(data) {
        console.log("Created member: " + data.member.guid)
        memberGUID = data.member.guid

        sleep(1000).then(() => {
          var request = {
            params: {
              userGuid: userGUID,
              memberGuid: memberGUID
            }
          }

          AtriumClient.checkMemberStatus(request)
            .then(function(data) {
              console.log("\n* Retrieving member aggregation status *")

              sleep(5000).then(() => {
                console.log("Member aggregation status: " + data.member.status)

                var request = {
                  params: {
                    userGuid: userGUID,
                    memberGuid: memberGUID
                  }
                }

                AtriumClient.listMemberAccounts(request)
                  .then(function(data) {
                    var transactions = []
                    DisplayAccountsAndTransactions(data, transactions, 0)
                  })
              })
            })
        })
      })
  });

  var DisplayAccountsAndTransactions = function (data, transactions, length) {
    if (length < data.accounts.length) {
      var request = {
        params: {
          userGuid: userGUID,
          accountGuid: data.accounts[length].guid
        }
      };

      AtriumClient.listAccountTransactions(request)
        .then(function(data2) {
          transactions.push(data2.transactions);
          DisplayAccountsAndTransactions(data, transactions, length + 1);
        })
    }
    else {
      console.log("\n* Listing all member accounts and transactions *")
      for (var i = 0; i < data.accounts.length; i++) {
        console.log("\nType: " + data.accounts[i].type + "\tName: " + data.accounts[i].name + "\tAvailable Balance: " + data.accounts[i].available_balance + "\tAvailable Credit: " + data.accounts[i].available_credit)
        for (var j = 0; j < transactions[i].length; j++) {
          console.log("\tDate: " + transactions[i][j].date + "\tDescription: " + transactions[i][j].description + "\tAmount: " + transactions[i][j].amount)
        }
      }

      var request = {
        params: {
          userGuid: userGUID
        }
      }

      AtriumClient.deleteUser(request)
        .then(function() {
          console.log("\n* Deleting test user *")

          console.log("Deleted user: " + userGUID)
        })
    }
  }
