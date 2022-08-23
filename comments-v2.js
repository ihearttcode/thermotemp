var document = window.document;

// Anonymous "self-invoking" function
(function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };
    var whenReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { whenReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            var endingTime = new Date().getTime();
            var tookTime = endingTime - startingTime;
            console.log("jQuery is loaded, after " + tookTime + " milliseconds!");
        });
    });

    whenReady(function($) {
         $(function() {
           var com = $("li[data-type=comment]").length;
           com;
           if ( com > 0 ) {
              var act = $("li[data-type=activity]");
           		var comB = $("li[data-type=comment]");
                $( act ).removeClass("active");
                $( comB ).click().addClass("active").css( "background-color", "yellow" );
                console.log("Comment Tab clicked " + com + " " + typeof act + " " + typeof comB ); }
        });

    });
})();
