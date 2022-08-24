var script = document.createElement("SCRIPT");
script.src = 'https://cdn.jsdelivr.net/gh/ihearttcode/thermotemp@main/comment-v6.js';
script.type = 'text/javascript';
var head = document.getElementsByTagName("head")[0];
var checkScript = function () {
        head.appendChild(script);
        console.log("Comment Script Appended to " + head);
    };

document.addEventListener( "load", checkScript(), true);

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
document.querySelector("ol li[data-type=comment]").addEventListener("load", commentTab());
