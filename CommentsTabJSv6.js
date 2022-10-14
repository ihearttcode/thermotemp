var document = window.document;
function caller() {
  var script = document.createElement("SCRIPT");
  script.src = 'https://cdn.jsdelivr.net/gh/ihearttcode/thermotemp@main/CommentsTabJSv5.js';
  script.type = 'text/javascript';
  document.getElementsByTagName("head")[0].appendChild(script);
function resolveAfter5Seconds(x,y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
      resolve(y);
    }, 5000);
  });
}

async function clickCommentsTab() {
  const x = await resolveAfter5Seconds('Comment Tab Clicked');
  console.log(x); // 'Comment Tab clicked'
  const y = await resolveAfter5Seconds(document.querySelector('li[data-type=comment]').click());
}
clickCommentsTab()
}
caller();
