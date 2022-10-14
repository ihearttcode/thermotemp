function resolveAfter5Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 5000);
  });
}

async function clickCommentsTab() {
  const x = await resolveAfter5Seconds('Comment Tab clicked');
  document.querySelector('li[data-type=comment]').click();
  console.log(x); // 'Comment Tab clicked'
}

clickCommentsTab();
