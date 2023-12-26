document.addEventListener("DOMContentLoaded", function() {
  const newsContainer = document.getElementById("news");
  let news = [];

  if (isOnline()){
    console.log ("Read news from server...")
    news = [{image: "", title: "News from server", text: "This news you have got from server"}]

  } else {
    news = JSON.parse(localStorage.getItem("news")) || [];
  }

  news.forEach(news_item => {
    let newsElement = document.createElement("div");
    newsElement.innerHTML = `
        <div class="card">
        <div class="card-image">
            <img src=${news_item.image}>
        </div>
        <div class="card-content">
            <div class="card-title">${news_item.title}</div>
            <p class="card-text">${news_item.text}</p>
        </div>
      </div>`;
     
    newsContainer.prepend(newsElement);
  });
});