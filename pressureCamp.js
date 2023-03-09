var postCampaign = {
  "url": "https://workflow-automation.podio.com/catch/g06gh8cy8mv73kd",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "data": {
    "emailAddress": getQueryVariable("emailAddress"),
    "firstName": getQueryVariable("firstName"),
    "lastName": getQueryVariable("lastName"),
    "companyName": getQueryVariable("companyName"),
    "jobTitle": getQueryVariable("jobTitle")
  }
};

$.ajax(postCampaign).done(function (response) {
  console.log(response);
});
