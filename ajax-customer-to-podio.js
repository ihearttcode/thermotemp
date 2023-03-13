function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
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
      "jobTitle": getQueryVariable("jobTitle"),
      "campaign": getQueryVariable("campaign)
    }
  };


  function ajaxToPodio(customer) {
    $.ajax(customer).done(function() {
      console.log("Ajax Completed");
    });
  }
  
  ajaxToPodio(postCampaign);
}
asyncCall();
