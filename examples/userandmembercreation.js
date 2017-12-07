const Atrium = require('mx-atrium');
const AtriumClient = new Atrium.Client("YOUR_MX_API_KEY", "YOUR_MX_CLIENT_ID", "https://vestibule.mx.com/");

var userGUID;
var memberGUID;

console.log("\n* Creating user *");

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
        name: "bank"
      }
    }

    AtriumClient.listInstitutions(request)
      .then(function(data) {
        console.log("\n* Listing institutions with query string \"bank\" *")

        for (var i = 0; i < data.institutions.length; i++) {
          console.log(data.institutions[i].name)
        }

        var request = {
          params: {
            institutionCode: "mxbank"
          }
        }

        AtriumClient.readInstitution(request)
          .then(function(data) {
            console.log("\n* Reading institution \"mxbank\" *")

            console.log(data.institution.name)

            var request = {
              params: {
                institutionCode: "mxbank"
              }
            }

            AtriumClient.listCredentials(request)
              .then(function(data) {
                console.log("\n* Reading institution credentials \"mxbank\" *")

                for (var i = 0; i < data.credentials.length; i++) {
                  console.log(data.credentials[i].guid)
                }

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
                    console.log("\n* Creating member *")

                    console.log("Created member: " + data.member.guid)
                    memberGUID = data.member.guid

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
  });
