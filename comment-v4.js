var document = window.document;

(function() {

  var checkReady = checkReady(); function checkReady() {
      if (document.querySelector("ol li[data-type=comment]").classList.contains("active") === false) {
        var com = document.querySelector("ol li[data-type=comment]");
        var activity = document.querySelector("ol li[data-type=activity]");
        com.click();
        com.classList.add("active");
        com.style.backgroundColor="yellow";
        activity.classList.remove("active");
        };
    };
});
