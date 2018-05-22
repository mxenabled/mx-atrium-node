var userGUID;
var memberGUID;
var endUserPresent;
var readline = require('readline');

const Atrium = require('mx-atrium');
const AtriumClient = new Atrium.Client("YOUR_MX_API_KEY", "YOUR_MX_CLIENT_ID", "https://vestibule.mx.com/");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter in user GUID. If not yet created just press enter key: ", (user_guid) => {
  rl.question("\nPlease enter in member GUID. If not yet created just press enter key: ", (member_guid) => {
    rl.question("\nPlease enter in if end user is present (true or false): ", (end_user_present) => {
        userGUID = user_guid;
        memberGUID = member_guid;
        endUserPresent = end_user_present;

        if (userGUID == "" && memberGUID != "") {
          console.log("\nMust include user GUID when member GUID is entered.")
          process.exit()
        }

        if (userGUID == "" && endUserPresent == "true") {
          console.log("\n* Creating user *")

          rl.question("\nPlease enter in an unique id for new user: ", (id) => {
            var request = {
              body: {
                "user": {
                  "identifier": id,
                }
              }
            }

            AtriumClient.createUser(request)
              .then(function(data) {
                userGUID = data.user.guid
                console.log("\nCreated user: " + userGUID)

                memberCreation();
              })
          })
        }
    })
  })
});

function memberCreation() {
  if (memberGUID != "" && endUserPresent == "true") {
    var request = {
      params: {
        userGuid: userGUID,
        memberGuid: memberGUID
      }
    }

    AtriumClient.aggregateMember(request)

    checkJobStatus()
  }
  else if (memberGUID != "") {
    DisplayAccountsAndTransactions()
  }
  else if (endUserPresent == "true") {
    console.log("\n* Creating member *")

    console.log("\n* Listing top 15 institutions *")

    institutions = AtriumClient.listInstitutions()
      .then(function(data) {

        for (var i = 0; i < data.institutions.length; i++) {
          console.log(data.institutions[i].name + " : institution code = " + data.institutions[i].name)
        }

        rl.question("\nPlease enter in desired institution code: ", (code) => {
          var request = {
            params: {
              institutionCode: code
            }
          }

          AtriumClient.listCredentials(request)
            .then(function(data) {
              var responses = []
              buildMemberCredentials(data, responses, 0)
            })
        })
      })
  }
  else {
    console.log("\nEnd user must be present to create a new member")

    process.exit()
  }
}

var buildMemberCredentials = function (data, responses, length) {
  if (length < data.credentials.length) {
    rl.question("\nPlease enter in " + data.credentials[length].label + ": ", function (answer) {
      responses.push(answer);
      buildMemberCredentials(data, responses, length + 1);
    });
  }
  else {
    credentials = []
    for (var i = 0; i < data.credentials.length; i++) {
      var cred = data.credentials[i].guid
      credentials.push({guid:data.credentials[i].guid, value:responses[i]})
    }

    var request = {
      params: {
        userGuid: userGUID
      },
      body: {
        "member": {
          "institution_code": "mxbank",
          "credentials": credentials
        }
      }
    }

    AtriumClient.createMember(request)
      .then(function(data) {
        console.log("\nCreated member: " + data.member.guid)

        memberGUID = data.member.guid

        checkJobStatus()
      })
  }
};


function checkJobStatus() {
  console.log("\n2 second delay...")

  sleep(2000).then(() => {
    var request = {
      params: {
        userGuid: userGUID,
        memberGuid: memberGUID
      }
    }

    AtriumClient.checkMemberStatus(request)
      .then(function(data) {
        var status = data.member.status

        console.log("\nJOB STATUS: " + status)

        switch(status) {
          case "COMPLETED":
              getAccounts()
            break;
          case "HALTED":
          case "FAILED":
            var request = {
              params: {
                userGuid: userGUID,
                memberGuid: memberGUID
              }
            }

            AtriumClient.checkMemberStatus(request)
              .then(function(data) {
                var date = new Date();
                var currentTime = date.toISOString();
                var lastSuccessTime = data.member.successfully_aggregated_at

                if (lastSuccessTime != null && (Math.abs(currentTime.substring(8, 10) - lastSuccessTime.substring(8, 10)) > 3 || Math.abs(currentTime.substring(5, 7) - lastSuccessTime.substring(5, 7)) > 0 || Math.abs(currentTime.substring(0, 4) - lastSuccessTime.substring(0, 4) > 0))) {
                  console.log("\nClient should contact MX Support to resolve issue.")
                }
                else {
                  console.log("\nAn update is currently unavailable. Please try again tomorrow")
                }
              })
            break;
          case "CREATED":
          case "UPDATED":
          case "RESUMED":
          case "CONNECTED":
          case "DEGRADED":
          case "DELAYED":
          case "INITIATED":
          case "REQUESTED":
          case "AUTHENTICATED":
          case "RECEIVED":
          case "TRANSFERRED":
            checkJobStatus()
            break;
          case "PREVENTED":
          case "DENIED":
          case "IMPAIRED":
            var request = {
              params: {
                userGuid: userGUID,
                memberGuid: memberGUID
              }
            };

            AtriumClient.readMember(request)
              .then(function(data) {
                var code = data.member.institution_code

                console.log("\nPlease update credentials")

                var request = {
                  params: {
                    institutionCode: code
                  }
                }

                AtriumClient.listCredentials(request)
                  .then(function(data) {
                    var responses = []
                    updateCredentials(data, responses, 0)
                  })
              })
            break;
          case "CHALLENGED":
            console.log("\nPlease answer the following challenges:")

            var request = {
              params: {
                userGuid: userGUID,
                memberGuid: memberGUID
              }
            };

            AtriumClient.listMemberChallenges(request)
              .then(function(data) {
                var responses = []
                answerChallenges(data, responses, 0)
              })
            break;
          case "REJECTED":
            var request = {
              params: {
                userGuid: userGUID,
                memberGuid: memberGUID
              }
            };

            AtriumClient.aggregateMember(request);

            checkJobStatus()
            break;
          case "EXPIRED":
            console.log("\nUser did not answer MFA in time. Please try again tomorrow.")
            break;
          case "LOCKED":
            console.log("\nUser's account is locked at FI")
            break;
          case "IMPEDED":
            console.log("\nUser's attention is required at FI website in order for aggregation to complete")
            break;
          case "DISCONTINUED":
            console.log("\nConnection to institution is no longer available.")
            break;
          case "CLOSED":
          case "DISABLED":
            console.log("\nAggregation is purposely turned off for this user.")
            break;
          case "TERMINATED":
          case "ABORTED":
          case "STOPPED":
          case "THROTTLED":
          case "SUSPENDED":
          case "ERRORED":
            if (counter < 3) {
              counter = counter + 1
              checkJobStatus()
            }
            else {
              console.log("\nAn update is currently unavailable. Please try again tomorrow and contact support if unsuccessful after 3 days.")
            }
            break;
          default:
            console.log(status)
        }
      })
  })
}


var answerChallenges = function (data, responses, length) {
  if (length < data.challenges.length) {
    rl.question(data.challenges[length].label, function (answer) {
      responses.push(answer);

      answerChallenges(data, responses, length + 1);
    });
  }
  else {

    challenges = []
    for (var i = 0; i < data.challenges.length; i++) {
      challenges.push({guid:data.challenges[i].guid, value:responses[i]})
    }

    var request = {
      params: {
        userGuid: userGUID,
        memberGuid: memberGUID
      },
      body: {
        "member": {
          "challenges": challenges
        }
      }
    };

    AtriumClient.resumeMemberAggregation(request)
      .then(function(data) {
        checkJobStatus()
      })
  }
}

var updateCredentials = function (data, responses, length) {
  if (length < data.credentials.length) {
    rl.question("\nPlease enter in " + data.credentials[length].label + ": ", function (answer) {
      responses.push(answer);
      updateCredentials(data, responses, length + 1);
    });
  }
  else {
    credentials = []
    for (var i = 0; i < data.credentials.length; i++) {
      credentials.push({guid:data.credentials[i].guid, value:responses[i]})
    }
    var request = {
      params: {
        userGuid: userGUID,
        memberGuid: memberGUID
      },
      body: {
        "member":{
          "credentials": credentials
        }
      }
    };

    AtriumClient.updateMember(request)
      .then(function(data) {
        checkJobStatus()
      })
  }
}

function getAccounts() {
  var request = {
    params: {
      userGuid: userGUID,
      memberGuid: memberGUID
    }
  };

  AtriumClient.readMember(request)
    .then(function(data) {
      var request = {
        params: {
          userGuid: userGUID,
          memberGuid: memberGUID
        }
      };

      AtriumClient.listMemberAccounts(request)
        .then(function(data) {
          var transactions = []
          DisplayAccountsAndTransactions(data, transactions, 0)
        })
    })
}

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
    rl.close()
  }
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
