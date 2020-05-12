// const items = document.querySelectorAll("#todo .item");

// function toggleActiveClass(evt) {
//   evt.target.classList.toggle("is-active");
// }

// items.forEach((item) => (item.onclick = toggleActiveClass));


document.querySelectorAll("#todo .item").forEach((el) => el.onclick = (e) => e.target.classList.toggle("is-active"));
