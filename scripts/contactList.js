const $contactList = document.querySelector(".contact-list")

const contacts = [
  { name: "Vincent Porter", status: "offline", lastConnection: "left 7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "online" },
  { name: "Mike Thomas", status: "online", lastConnection: "online" },
  { name: "Christian Kelly", status: "offline", lastConnection: "left 10 hours ago" },
  { name: "Monica Ward", status: "online", lastConnection: "online" },
  { name: "Dean Henry", status: "offline", lastConnection: "offline since Oct 28" }
]

contacts.forEach(function (contact) {
  $contactList.innerHTML += `
    <li class="contact">
      <img src="./assets/avatar.jpeg" alt="imagen de perfil">
        <div>
          <h4>${contact.name}</h4>
          <p class="${contact.status === "offline" ? "offline" : "online"}">${contact.lastConnection}</p>
        </div>
    </li>`
})