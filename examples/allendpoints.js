const Atrium = require('mx-atrium');
const AtriumClient = new Atrium.Client("YOUR_MX_API_KEY", "YOUR_MX_CLIENT_ID", "https://vestibule.mx.com/");
var userGUID;
var memberGUID;
var accountGUID;
var transactionGUID;


function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

var request = {
  body: {
    "user": {
      "metadata": "{\"first_name\": \"Steven\"}"
    }
  }
};

AtriumClient.createUser(request)
  .then(function(response) {
    console.log("\n************************** Create User **************************")
    console.log(response)

    userGUID = response.user.guid

    var request = {
      params: {
        userGuid: userGUID,
      }
    }

    AtriumClient.readUser(request)
      .then(function(response) {
        console.log("\n************************** Read User **************************")
        console.log(response)

        var request = {
          body: {
            "user": {
              "guid": userGUID,
              "metadata": "{\"first_name\": \"Steven\", \"last_name\": \"Universe\"}"
            }
          }
        }

      AtriumClient.updateUser(request)
        .then(function(response) {
          console.log("\n************************** Update User **************************")
          console.log(response)


          AtriumClient.listUsers()
            .then(function(response) {
              console.log("\n************************** List Users **************************")
              console.log(response)

              var request = {
                params: {
                  name: "bank"
                }
              }

              AtriumClient.listInstitutions(request)
                .then(function(response) {
                  console.log("\n************************** List Institutions **************************")
                  console.log(response)

                  var request = {
                    params: {
                      institutionCode: "mxbank"
                    }
                  }

                  AtriumClient.readInstitution(request)
                    .then(function(response) {
                      console.log("\n************************** Read Institution **************************")
                      console.log(response)

                      var request = {
                        params: {
                          institutionCode: "mxbank"
                        }
                      };

                      AtriumClient.listCredentials(request)
                        .then(function(response) {
                          console.log("\n************************** Read Institution Credentials**************************")
                          console.log(response)

                          var request = {
                            params: {
                              userGuid: userGUID
                            },
                            body: {
                              "member": {
                                "institution_code": "mxbank",
                                "credentials": [
                                  {
                                    "guid": "CRD-9f61fb4c-912c-bd1e-b175-ccc7f0275cc1",
                                    "value": "test_atrium1"
                                  },
                                  {
                                    "guid": "CRD-e3d7ea81-aac7-05e9-fbdd-4b493c6e474d",
                                    "value": "challenge1"
                                  }
                                ]
                              }
                            }
                          }

                          AtriumClient.createMember(request)
                            .then(function(response) {
                              console.log("\n************************** Create Member **************************")
                              console.log(response)

                              memberGUID = response.member.guid

                              var request = {
                                params: {
                                  userGuid: userGUID,
                                  memberGuid: memberGUID
                                }
                              }

                              AtriumClient.readMember(request)
                                .then(function(response) {
                                  console.log("\n************************** Read Member **************************")
                                  console.log(response)

                                  var request = {
                                    params: {
                                      userGuid: userGUID,
                                      memberGuid: memberGUID
                                    },
                                    body: {
                                      "member":{
                                        "credentials":[
                                          {
                                             "guid": "CRD-9f61fb4c-912c-bd1e-b175-ccc7f0275cc1",
                                             "value": "test_atrium"
                                          },
                                          {
                                             "guid": "CRD-e3d7ea81-aac7-05e9-fbdd-4b493c6e474d",
                                             "value": "challenge"
                                          }
                                        ],
                                        "metadata": "{\"credentials_last_refreshed_at\": \"2015-10-16\"}"
                                      }
                                    }
                                  }

                                  AtriumClient.updateMember(request)
                                    .then(function(response) {
                                      console.log("\n************************** Update Member **************************")
                                      console.log(response)

                                      var request = {
                                        params: {
                                          userGuid: userGUID
                                        }
                                      };

                                      AtriumClient.listMembers(request)
                                        .then(function(response) {
                                          console.log("\n************************** List Members **************************")
                                          console.log(response)

                                          var request = {
                                            params: {
                                              userGuid: userGUID,
                                              memberGuid: memberGUID
                                            }
                                          };

                                          AtriumClient.aggregateMember(request)
                                            .then(function(response) {
                                              console.log("\n************************** Aggregate Member **************************")
                                              console.log(response)

                                              var request = {
                                                params: {
                                                  userGuid: userGUID,
                                                  memberGuid: memberGUID
                                                }
                                              }

                                              AtriumClient.checkMemberStatus(request)
                                                .then(function(response) {
                                                  console.log("\n************************** Read Member Status **************************")
                                                  console.log(response)
                                                  if (response.member.status == "CHALLENGED") {
                                                    console.log("* CHALLENGE ARRAY CONTENTS *")
                                                    for (var i = 0; i < response.member.challenges.length; i++) {
                                                      console.log(response.member.challenges[i])
                                                    }
                                                  }


                                                  sleep(5000).then(() => {

                                                    var request = {
                                                      params: {
                                                        userGuid: userGUID,
                                                        memberGuid: memberGUID
                                                      }
                                                    }

                                                    AtriumClient.listMemberChallenges(request)
                                                      .then(function(response) {
                                                        console.log("\n************************** List Member MFA Challenges **************************")
                                                        console.log(response)
                                                        if (response.challenges.length > 0 && response.challenges[0].type == "OPTIONS" || response.challenges[0].type == "IMAGE_OPTIONS") {
                                                          console.log("* OPTIONS ARRAY CONTENTS *")
                                                          for (var i = 0; i < response.challenges[0].options.length; i++) {
                                                            console.log(response.challenges[0].options[i])
                                                          }
                                                        }

                                                        var request = {
                                                          params: {
                                                            userGuid: userGUID,
                                                            memberGuid: memberGUID
                                                          },
                                                          body: {
                                                            "member": {
                                                              "challenges": [
                                                                {
                                                                  "guid": response.challenges[0].guid,
                                                                  "value": "correct"
                                                                }
                                                              ]
                                                            }
                                                          }
                                                        }

                                                        AtriumClient.resumeMemberAggregation(request)
                                                          .then(function(response) {
                                                            console.log("\n************************** Resume Aggregation **************************")
                                                            console.log(response)

                                                            var request = {
                                                              params: {
                                                                userGuid: userGUID,
                                                                memberGuid: memberGUID
                                                              }
                                                            }

                                                            AtriumClient.listMemberCredentials(request)
                                                              .then(function(response) {
                                                                console.log("\n************************** List Member Credentials **************************")
                                                                console.log(response)

                                                                sleep(5000).then(() => {

                                                                  var request = {
                                                                    params: {
                                                                      userGuid: userGUID,
                                                                      memberGuid: memberGUID
                                                                    }
                                                                  }

                                                                  AtriumClient.listMemberAccounts(request)
                                                                    .then(function(response) {
                                                                      console.log("\n************************** List Member Accounts **************************")
                                                                      console.log(response)

                                                                      accountGUID = response.accounts[0].guid

                                                                      var request = {
                                                                        params: {
                                                                          userGuid: userGUID,
                                                                          memberGuid: memberGUID
                                                                        }
                                                                      }

                                                                      AtriumClient.listMemberTransactions(request)
                                                                        .then(function(response) {
                                                                          console.log("\n************************** List Member Transactions **************************")
                                                                          console.log(response)

                                                                          var request = {
                                                                            params: {
                                                                              userGuid: userGUID,
                                                                              accountGuid: accountGUID
                                                                            }
                                                                          }

                                                                          AtriumClient.readAccount(request)
                                                                            .then(function(response) {
                                                                              console.log("\n************************** Read Account **************************")
                                                                              console.log(response)

                                                                              var request = {
                                                                                params: {
                                                                                  userGuid: userGUID
                                                                                }
                                                                              }

                                                                              AtriumClient.listAccounts(request)
                                                                                .then(function(response) {
                                                                                  console.log("\n************************** List Accounts **************************")
                                                                                  console.log(response)

                                                                                  var request = {
                                                                                    params: {
                                                                                      userGuid: userGUID,
                                                                                      accountGuid: accountGUID
                                                                                    }
                                                                                  };

                                                                                  AtriumClient.listAccountTransactions(request)
                                                                                    .then(function(response) {
                                                                                      console.log("\n************************** List Account Transactions **************************")
                                                                                      console.log(response)

                                                                                      var request = {
                                                                                        params: {
                                                                                          userGuid: userGUID,
                                                                                          transactionGuid: response.transactions[0].guid
                                                                                        }
                                                                                      }

                                                                                      AtriumClient.readTransaction(request)
                                                                                        .then(function(response) {
                                                                                          console.log("\n************************** Read a Transaction **************************")
                                                                                          console.log(response)

                                                                                          var request = {
                                                                                            params: {
                                                                                              userGuid: userGUID
                                                                                            }
                                                                                          }

                                                                                          AtriumClient.listTransactions(request)
                                                                                            .then(function(response) {
                                                                                              console.log("\n************************** List Transactions **************************")
                                                                                              console.log(response)

                                                                                              var request = {
                                                                                                params: {
                                                                                                  userGuid: userGUID
                                                                                                }
                                                                                              }

                                                                                              AtriumClient.getConnectWidgetUrl(request)
                                                                                                .then(function(response) {
                                                                                                  console.log("\n************************** Connect Widget **************************")
                                                                                                  console.log(response)

                                                                                                  var request = {
                                                                                                    params: {
                                                                                                      userGuid: userGUID,
                                                                                                      memberGuid: memberGUID
                                                                                                    }
                                                                                                  }

                                                                                                  AtriumClient.deleteMember(request)
                                                                                                    .then(function(response) {
                                                                                                      console.log("\n************************** Delete Member **************************")

                                                                                                      var request = {
                                                                                                        params: {
                                                                                                          userGuid: userGUID
                                                                                                        }
                                                                                                      }

                                                                                                      AtriumClient.deleteUser(request)
                                                                                                        .then(function(response) {
                                                                                                          console.log("\n************************** Delete User **************************")

                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                              })
                                                          })
                                                      })
                                                  })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
      })
  })
