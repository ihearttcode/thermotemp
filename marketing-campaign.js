var document = window.document;
function jCaller() {
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);
}
jCaller();
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
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
    "companyName": getQueryVariable("companyname"),
    "jobTitle": getQueryVariable("jobTitle")
  }
};

$.ajax(postCampaign).done(function (response) {
  console.log(response);
});
