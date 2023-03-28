var ticketStatus = $("#ticket-status .can-update").children().get();
var quoteStatusSelected = $("#quote-status .selected");
var quoteStatus = $("#quote-status .can-update").children().get();

function ticketStatusVisibility() {
  if (quoteStatusSelected.text().includes("Pending Creation")) {
    console.log("true");
    ticketStatus.forEach(function(element) {
      if ($(element).text().includes("**OPEN**") === false) {
        $(element).hide();
      };
    })
  } else {
    console.log('false');
    ticketStatus.forEach(function(element) {
      $(element).show();
    })
  }
}

function quoteClickEventHandler(event) {
  if (event.type === "click") {
    ticketStatusVisibility();
  } else {
    console.log(ErrorEvent);
  }
}

quoteStatus.forEach(element => addEventListener("click", element));

ticketStatusVisibility();
