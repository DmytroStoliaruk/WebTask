function isOnline(){
  return window.navigator.onLine;
}

document.getElementById("chooseImage").addEventListener("click", function() {
  document.getElementById("imageInput").click();
});

document.getElementById("imageInput").addEventListener("change", function(event) {
  const [file] = event.target.files;
  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("imagePreview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("newsForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const titleText = document.getElementById("newsTitle").value.trim();
  const messageText = document.getElementById("newsText").value.trim();
  const newsImage = document.getElementById("imagePreview").src

  if (!messageText || !titleText || newsImage.includes("Placeholder.png")) {
    alert("Please add image, title and message text. Field can't be empty.");
    return;
  }

  this.reset();
  document.getElementById("imagePreview").src = "images/Placeholder.png";

  setTimeout(function() {
    if (isOnline()){  
      alert(`Your news about  ${titleText} was added to server.`);
    } else {
      // save news to local storage 
      const news_item = {
        image: newsImage,
        title: titleText,
        text: messageText
      };
      
      let news = JSON.parse(localStorage.getItem("news")) || [];
      news.push(news_item); 
      localStorage.setItem("news", JSON.stringify(news)); 

      alert(`Your news about ${titleText} was saves in local storage.`);
    }  
  }, 100);
});
