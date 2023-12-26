document.addEventListener("DOMContentLoaded", function() {
  const messagesContainer = document.getElementById("messages");
  let messages = [];

  if (isOnline()){
    console.log ("Read messages from server...")
    messages = [{text: "Message one from server", date: "12.12.2023, 21:25", name: "MetalistFan-2023"}]
  } else {
    messages = JSON.parse(localStorage.getItem("messages")) || [];
  }

  messages.forEach(message => {
    let messageElement = document.createElement("article");
    messageElement.innerHTML = `
      <p>${message.text}</p>
      <div class="date-and-name">
        <p class="date">${message.date}</p>
        <p class="name">${message.name}</p>
      </div>
      <hr class="divider">`;
    
    messagesContainer.prepend(messageElement);
  });
});
