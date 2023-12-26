function formatDateTime() {
  const nowDate = new Date();
  const currentDate = nowDate.toLocaleString("ru", {
                                                      year: 'numeric',
                                                      month: 'numeric',
                                                      day: 'numeric',
                                                      timezone: 'UTC'
                                                    });
  const currentTime = nowDate.toLocaleTimeString('en-GB', {
                                                      hour: '2-digit',
                                                      minute: '2-digit',
                                                      hour12: false
                                                    });   
  return currentDate + ',  ' + currentTime;
}

document.getElementById('fanForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const messageText = document.getElementById('fanText').value.trim();
  const formattedDate = formatDateTime();
  const fanName = "MetalistFan-2023";

  if (!messageText) {
    alert("Please add message text. Message can't be empty.");
    return;
  }

  let messageElement = document.createElement('article');
  messageElement.innerHTML = `
    <p>${messageText}</p>
    <div class="date-and-name">
      <p class="date">${formattedDate}</p>
      <p class="name">${fanName}</p>
    </div>
    <hr class="divider">`;

  document.getElementById('messages').prepend(messageElement);
  
  document.getElementById('fanText').value = '';
  
  setTimeout(function() {
    if (isOnline()){  
      alert("Your message was published on server.");
    } else {
      // save message to local storage
      const message = {
        text: messageText,
        date: formattedDate,
        name: fanName
      };
      
      let messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.push(message); 
      localStorage.setItem('messages', JSON.stringify(messages)); 

      alert("Your message was saves in local storage.");
    }  
  }, 100);
});
