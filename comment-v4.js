var document = window.document;

var commentTab = function() {
      if (document.querySelector("ol li[data-type=comment]").classList.contains("clicked") === false) {
        var com = document.querySelector("ol li[data-type=comment]");
        var activity = document.querySelector("ol li[data-type=activity]");
        com.click();
        com.classList.add("active","clicked");
        com.style.backgroundColor="yellow";
        activity.classList.remove("active");
        }
    };
document.body.addEventListener("load", commentTab());
