const URL = "http://localhost:8000/users";
const popup = document.getElementById("user-details-popup");
const formPost = document.getElementById("form-post-user");

// https://medium.com/@quyetvv/async-flow-from-callback-hell-to-promise-to-async-await-2da3ecfff997

// API FUNCTIONS

async function postNewUser() {
  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const gender = formPost.querySelector("input:checked").value;

  try {
    await axios.post(URL, {
      first_name,
      last_name,
      email,
      gender,
    });

    getAllUsers();

  } catch(err) {
      console.error(err);
  }

}

function getAllUsers() {
  axios
    .get(URL + "?_sort=id&_order=asc")
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
  console.log(id);
  try {
    await axios.delete(`${URL}/${id}`);
    removeUserFromDocument(id);
  } catch (err) {
    console.error(err);
  }
}

async function updateUser(id) {
  const first_name = popup.querySelector(".first").textContent;
  const last_name = popup.querySelector(".last").textContent;
  const email = popup.querySelector(".email").textContent;
  const gender = popup.querySelector(".gender").textContent;

  console.log(first_name, last_name, email, gender);

  try {
    await axios.patch(`${URL}/${id}`, {
      first_name,
      last_name,
      email,
      gender,
    });

    getAllUsers();
  } catch (err) {
    console.error(err);
  }
}

// DOM FUNCTIONS

function removeUserFromDocument(idUser) {
  // https://developer.mozilla.org/fr/docs/Web/CSS/S%C3%A9lecteurs_d_attribut
  const cardToRemove = document.querySelector(`[data-user-id="${idUser}"]`);
  cardToRemove.remove();
}

function displayOneUser(user) {
  const wrapper = document.createElement("div");
  popup.appendChild(wrapper);

  wrapper.outerHTML = `
  <div id="infos-user">
      <h3>
        <span contenteditable class="first">${user.first_name}</span>
        <span contenteditable class="last">${user.last_name}</span>
      </h3>
      <p class="email" contenteditable>${user.email}</p>
      <p class="gender" contenteditable>${user.gender}</p>
  </div>`;

  popup.querySelector(".first").onblur = () => updateUser(user.id);
  popup.querySelector(".last").onblur = () => updateUser(user.id);
  popup.querySelector(".email").onblur = () => updateUser(user.id);
  popup.querySelector(".gender").onblur = () => updateUser(user.id);

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

// initialisation de la liste

getAllUsers();

// attacher les event listeners

// document.getElementById("btn-get-all").onclick = getAllUsers;
document.getElementById("btn-get-all").addEventListener("click", getAllUsers);
document.getElementById("close-user-popup").onclick = removePopup;

formPost.querySelector(".btn").onclick = postNewUser;
