const Atrium = require('mx-atrium');
const AtriumClient = new Atrium.Client("YOUR_MX_API_KEY", "YOUR_MX_CLIENT_ID", "https://vestibule.mx.com/");

var userGUID;
var memberGUID;

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

console.log("\n* Creating test user and member with \"DENIED\" aggregation status *");

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
              "value": "INVALID"
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
              console.log("Member aggregation status: " + data.member.status)

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
                      institutionCode: data.member.institution_code
                    }
                  };

                  AtriumClient.listCredentials(request)
                    .then(function(data) {
                      console.log("\n* Updating credentials *")

                      var request = {
                        params: {
                          userGuid: userGUID,
                          memberGuid: memberGUID
                        },
                        body: {
                          "member":{
                            "credentials":[
                              {
                                 "guid": data.credentials[0].guid,
                                 "value": "test_atrium"
                              },
                              {
                                 "guid": data.credentials[1].guid,
                                 "value": "password"
                              }
                            ]
                          }
                        }
                      };

                      AtriumClient.updateMember(request)
                      .then(function(data) {
                        sleep(1000).then(() => {
                          console.log("\n* Retrieving member aggregation status *")

                          var request = {
                            params: {
                              userGuid: userGUID,
                              memberGuid: memberGUID
                            }
                          }

                          AtriumClient.checkMemberStatus(request)
                            .then(function(data) {
                              console.log("Member aggregation status: " + data.member.status)

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
                            })
                        })
                      })
                    })
                })
            })
        })
      })
  });
