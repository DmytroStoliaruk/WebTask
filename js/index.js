function isOnline(){
  return window.navigator.onLine;
}

function sendMessagesToServer(messages) {
  console.log("Sending messages to server:", messages);
}

function sendnewsToServer(news) {
  console.log("Sending news to server...");
}

window.addEventListener("online", () => {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  if (messages.length > 0) {
    sendMessagesToServer(messages);
    localStorage.removeItem("messages");
  }

  const news = JSON.parse(localStorage.getItem("news")) || [];
  if (news.length > 0) {
    sendnewsToServer(news);
    localStorage.removeItem("news");
  }
});