const icon = document.getElementById("burger");
const sidebar = document.getElementById("sidebar-main");

icon.onclick = () => sidebar.classList.toggle("is-visible");
