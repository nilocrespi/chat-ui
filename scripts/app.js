const $inputMessage = document.querySelector(".input-message")
const $sendButton = document.querySelector(".btn-send")
const $chatMessages = document.querySelector(".chat-messages")

$sendButton.addEventListener("click", sendMessage)

function sendMessage() {
  const message = $inputMessage.value

  $chatMessages.innerHTML +=
    `<div class="message sent">
      <p>${message}</p>
      <p class="timestamp">${new Date().toLocaleTimeString()}</p>
    </div>`

  $inputMessage.value = ""

  // asíncrono  
  setTimeout(function () {
    $chatMessages.innerHTML +=
      `<div class="message received">
        <p>Mensaje recibido!✅</p>
        <p class="timestamp">${new Date().toLocaleTimeString()}</p>
      </div>`
  }, 5000)
}