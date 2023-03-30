var document = window.document;
function caller() {
  var script = document.createElement("SCRIPT");
  script.src = 'https://cdn.jsdelivr.net/gh/ihearttcode/thermotemp@main/commentTabScript2.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);
}
caller();
