const URL = "http://localhost:8000/users";
const popup = document.getElementById("user-details-popup");

function getAllUsers() {
  axios
    .get(URL)
    .then((apiRes) => {
      const users = apiRes.data;
      displayAllUsers(users);
    })
    .catch((apiErr) => console.error(apiErr));
}

function getOneUser(id) {
  axios
    .get(`${URL}/${id}`)
    .then((apiRes) => {
      const user = apiRes.data;
      displayOneUser(user);
    })
    .catch((apiErr) => console.error(apiErr));
}

async function deleteOneUser(id) {
  try {
    await axios.delete(`${URL}/${id}`);
    console.log("ok, il faut supprimer la carte qu'on vient de delete");
  } catch (err) {
    console.error(err);
  }
}

function displayOneUser(user) {
  const wrapper = document.createElement("div");
  popup.appendChild(wrapper);
  wrapper.outerHTML = `
  <div id="infos-user">
      <h3>${user.first_name} ${user.last_name}</h3>
      <p>${user.email}</p>
      <p>${user.genre}</p>
  </div>`;
  popup.classList.remove("is-hidden");
}

function removePopup() {
  const wrapper = popup.querySelector("div");
  wrapper.remove();
  popup.classList.add("is-hidden");
}

function displayAllUsers(list) {
  const ul = document.getElementById("list-all-users");
  ul.innerHTML = "";
  list.forEach((user) => {
    // create li element object
    const li = document.createElement("li");
    li.classList.add("user");
    li.setAttribute("data-user-id", user.id);
    // setup li's markup
    li.innerHTML = `
            <h3>${user.first_name} ${user.last_name}</h3>
            <div class="buttons">
                <button class="btn remove">remove</button>
                <button class="btn details">details</button>
            </div>
        `;
    // get the btn as an element object
    const btnDetails = li.querySelector(".btn.details");
    const btnRemove = li.querySelector(".btn.remove");

    // setup event listeners on the btn
    btnDetails.onclick = () => {
      getOneUser(user.id);
    };

    btnRemove.onclick = () => {
      deleteOneUser(user.id);
    };

    ul.appendChild(li);
  });
}

document.getElementById("btn-get-all").onclick = getAllUsers;
document.getElementById("close-user-popup").onclick = removePopup;
