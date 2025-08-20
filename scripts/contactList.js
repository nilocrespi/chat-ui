const $contactList = document.querySelector(".contact-list")
const $searchInput = document.querySelector(".search")


const contacts = [
  { name: "Vincent Porter", status: "offline", lastConnection: "left 7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "online" },
  { name: "Mike Thomas", status: "online", lastConnection: "online" },
  { name: "Christian Kelly", status: "offline", lastConnection: "left 10 hours ago" },
  { name: "Monica Ward", status: "online", lastConnection: "online" },
  { name: "Dean Henry", status: "offline", lastConnection: "offline since Oct 28" }
]



function renderContacts(contactListParam) {
  $contactList.innerHTML = ""

  contactListParam.forEach(function (contact) {

    let statusClass = ""

    if (contact.status === "online") {
      statusClass = "online"
    } else {
      statusClass = "offline"
    }

    $contactList.innerHTML += `
      <li class="contact">
        <img src="assets/avatar.jpeg" alt="imagen de perfil" />
        <div>
          <h4>${contact.name}</h4>
          <p class="${statusClass}">${contact.lastConnection}</p>
        </div>
      </li>
    `
  })
}

renderContacts(contacts)

$searchInput.addEventListener("input", searchContacts)

function searchContacts() {
  const inputValue = $searchInput.value.toLowerCase()

  const filteredContacts = []

  contacts.forEach(function (contact) {
    const contactNameToLowerCase = contact.name.toLowerCase()

    if (contactNameToLowerCase.includes(inputValue)) {
      filteredContacts.push(contact)
    }
  })

  renderContacts(filteredContacts)
}


/*contacts.forEach(function (contact) {
  $contactList.innerHTML += `
    <li class="contact">
      <img src="./assets/avatar.jpeg" alt="imagen de perfil">
        <div>
          <h4>${contact.name}</h4>
          <p class="${contact.status === "offline" ? "offline" : "online"}">${contact.lastConnection}</p>
        </div>
    </li>`
})*/