function clickCommentTab() {
  var commentsTab = document.querySelector("li[data-type='comment']");
  if (!commentsTab.classList.contains("clicked")) {
    var activity = document.querySelector("li[data-type='activity']");
    commentsTab.click();
    commentsTab.classList.add("active", "clicked");
    commentsTab.style.backgroundColor = "yellow";
    activity.classList.remove("active");
  }
}
clickCommentTab();
