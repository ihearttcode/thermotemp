var script = document.createElement("SCRIPT");
script.src = 'https://cdn.jsdelivr.net/gh/ihearttcode/thermotemp@main/comment-v7.js';
script.type = 'text/javascript';
script.async = '';
var head = document.getElementsByTagName("head")[0];
var checkScript = function () {
        head.appendChild(script);
        console.log("Comment Script Appended to " + head);
    };

document.getElementsByTagName("body").addEventListener( "load", checkScript());

var commentTab = function () {
      if (document.querySelector("ol li[data-type=comment]").classList.contains("clicked") === false) {
        var com = document.querySelector("ol li[data-type=comment]");
        var activity = document.querySelector("ol li[data-type=activity]");
        com.click();
        com.classList.add("active","clicked");
        com.style.backgroundColor="yellow";
        activity.classList.remove("active");
        };
    };
document.getElementsByTagName("body").addEventListener("load", commentTab());
