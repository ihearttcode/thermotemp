function commentTab(commentClick) {
  document.querySelector('li[data-type=comment]').click();
}
function clickTab(callback) {
  const commentClick = document.querySelector('li[data-type=comment]');
  callback(commentClick);
}

clickTab(commentTab);
