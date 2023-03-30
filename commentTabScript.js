function clickCommentTab() {
    var commentsTab = $("li[data-type='comment']");
    if (commentsTab.hasClass("clicked") === false) {
      var activity = $("li[data-type='activity']");
      commentsTab.click();
      commentsTab.addClass("active clicked");
      commentsTab.css({
        backgroundColor: "yellow"
      });
      activity.removeClass("active");
    }
  }
  clickCommentTab();
