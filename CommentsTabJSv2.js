async function f() {
  var commentSection = {
    //$("li[data-type=comment]").click();
  then(resolve, _reject) {
    resolve("Comment section clicked");
  },
  };
  await document.readyState === 'complete';
  await window.addEventListener('DOMContentLoaded', (event) => {
    $("li[data-type=comment]");
  } );
  $("li[data-type=comment]").click();
	console.log(await commentSection);
}
f();
