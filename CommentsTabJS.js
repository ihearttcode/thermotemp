async function f() {
  var commentSection = {
    //$("li[data-type=comment]").click();
  then(resolve, _reject) {
    resolve("Comment section clicked");
  },
  };
  await Document.readyState === 'complete';
	console.log(await commentSection);
}
var comments =  $("li[data-type=comment]").click();
f(comments);
